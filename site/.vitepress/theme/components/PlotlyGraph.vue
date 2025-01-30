<script setup>
import { onMounted, ref, watchEffect, nextTick } from "vue";
import Plotly from "plotly.js-dist";

const props = defineProps({
  funktion: Array, // Liste von Funktionen ["y=x**2", "y=Math.sin(x)", ...]
  xmin: Number,
  xmax: Number,
  ymin: Number,
  ymax: Number,
  id: String,
});

const graphRef = ref(null);
const theme = ref("light");

// Funktion zur sicheren Berechnung von y-Werten
const berechneY = (x, gleichung) => {
  try {
    const saubereGleichung = gleichung.replace(/x/g, `(${x})`).replace(/\^/g, "**");
    return new Function("return " + saubereGleichung)();
  } catch (e) {
    console.error("Fehler beim Berechnen der Funktion:", e);
    return NaN;
  }
};


// Funktion zur Ermittlung des aktuellen Themes
const updateTheme = () => {
  theme.value = document.documentElement.classList.contains("dark") ? "dark" : "light";
  renderPlot(); // Graph direkt neu zeichnen
};

// Dark-/Light-Mode beobachten und sofort aktualisieren
onMounted(() => {
  updateTheme();
  const observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  renderPlot();

  return () => observer.disconnect(); // Cleanup bei Zerstörung der Komponente
});

const renderPlot = async () => {
  if (!props.funktion || props.funktion.length === 0) {
    console.error("Keine Funktionsgleichungen übergeben!");
    return;
  }

  const traces = [];

  props.funktion.forEach((gleichung, index) => {
    const x = [];
    const y = [];

    for (let xi = props.xmin; xi <= props.xmax; xi += (props.xmax - props.xmin) / 100) {
      const yi = berechneY(xi, gleichung);
      if (typeof yi === "number" && isFinite(yi)) {
        x.push(xi);
        y.push(yi);
      }
    }

    if (x.length > 0 && y.length > 0) {
      traces.push({
        x,
        y,
        type: "scatter",
        mode: "lines",
        name: gleichung, // Name für die Legende
      });
    }
  });

  if (traces.length === 0) {
    console.error("Keine gültigen Daten für den Graphen!");
    return;
  }

  const plotConfig = {
    title: "Mehrere Funktionen in einem Graphen",
    xaxis: { range: [props.xmin, props.xmax], title: "x" },
    yaxis: { range: [props.ymin, props.ymax], title: "y" },
    paper_bgcolor: theme.value === "dark" ? "#1e1e1e" : "#ffffff",
    plot_bgcolor: theme.value === "dark" ? "#1e1e1e" : "#ffffff",
    font: { color: theme.value === "dark" ? "#ffffff" : "#000000" },
  };

  await nextTick(); // Sicherstellen, dass das DOM bereit ist
  Plotly.newPlot(graphRef.value, traces, plotConfig);
};
</script>

<template>
    <div ref="graphRef" style="width: 100%; height: 400px;"></div>
  </template>