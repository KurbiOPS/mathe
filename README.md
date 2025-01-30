# Mathematische Dokumentation

## Einleitung
Dieses Projekt verwendet [VitePress](https://vitepress.dev/), ein schnelles und leichtgewichtiges Framework für Dokumentations-Websites. 

## Installation wenn du mitwirken willst
### Voraussetzungen
- [Node.js](https://nodejs.org/) (empfohlen: Version 18 oder höher)
- [npm](https://www.npmjs.com/) oder [yarn](https://yarnpkg.com/)

### Setup
Führe folgenden Befehl aus, um die Abhängigkeiten zu installieren:
```sh
npm install
```

## Entwicklung und Bereitstellung

### Lokale Vorschau
Um die Dokumentation lokal zu starten:
```sh
npm run docs:dev
```
Dies startet einen Entwicklungsserver unter `http://localhost:5173` (oder einem anderen Port, falls dieser bereits belegt ist).

### Generieren der statischen Seiten
Um die Dokumentation als statische Website zu generieren:
```sh
npm run docs:build
```
Die generierten Dateien befinden sich im `site/.vitepress/dist`-Verzeichnis.

### Vorschau der generierten Seiten
Nach der Generierung kannst du die Seiten mit folgendem Befehl anzeigen lassen:
```sh
npm run docs:preview
```

## Eigene mathematische Erklärungen hinzufügen

### Neue Markdown-Datei erstellen
1. Erstelle eine neue `.md`-Datei im `site`-Verzeichnis, z. B.:
   ```sh
   touch site/mathematik.md
   ```
2. Füge Inhalte in der Datei hinzu, z. B.:
   ```md
   # Grundlagen der Mathematik
   Hier erklären wir grundlegende mathematische Konzepte wie Addition, Subtraktion, Multiplikation und Division.
   
   ## Addition
   $$ a + b = c $$
   
   ## Subtraktion
   $$ a - b = c $$
   ```

### Die neue Seite im Menü verlinken
Falls die Seite im Menü erscheinen soll, bearbeite die Datei `site/.vitepress/config.js` und füge die neue Seite hinzu:
```js
export default {
  themeConfig: {
    sidebar: [
      { text: 'Startseite', link: '/' },
      { text: 'Mathematik', link: '/mathematik' }
    ]
  }
}
```

### Weitere Konfigurationsmöglichkeiten
VitePress unterstützt LaTeX für mathematische Formeln über `markdown-it-mathjax3`. Eine vollständige Anleitung zur Anpassung der VitePress-Dokumentation findest du in der offiziellen Dokumentation:
- [VitePress Dokumentation](https://vitepress.dev/)
- [MathJax Unterstützung](https://github.com/markdown-it/markdown-it-mathjax3)