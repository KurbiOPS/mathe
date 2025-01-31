# Die quadratische Funktion (Parabeln)

## Parabelnformeln im Überblick:

- **Normalparabel:** $y = x^2$
- **Gestreckte oder gestauchte Parabel:** $y = ax^2$
- **Auf der y-Achse verschoben:** $y = ax^2 + c$
- **Auf der x-Achse verschoben:** $y = (x - d)^2$
- **Auf der x- und y-Achse verschoben:** $y = (x - d)^2 + c$

## Normalparabel $y = x^2$

Die Normalparabel ist die „Standardform“ aller Parabeln.

### Erkennung ohne Messung
Anhand der unten eingezeichneten Punkte kann man erkennen, ob es sich um eine Normalparabel handelt.

**Bild!!!**  

Die Normalparabel kann auch nach unten geöffnet sein.

**Bild!!!**  

Die Punkte für die Erkennung bleiben gleich.

## Gestreckte und gestauchte Parabel $y = ax^2$

### Gestreckte Parabel
Gestreckte Parabeln sind „enger“ als die Normalparabel. Sie verlaufen innerhalb der Punkte der Normalparabel.

**Bild!!!**

### Gestauchte Parabel
Gestauchte Parabeln sind „breiter“ als die Normalparabel. Sie verlaufen außerhalb der Punkte der Normalparabel.

**Bild!!!**

### Was ist die Variable $a$?
Die allgemeine Formel ist:

$$ y = ax^2 $$

Die Normalparabel ist ein Spezialfall mit $a = 1$. Das bedeutet:

- **Normalparabel:** $a = 1$
- **Gestreckte Parabel:** $a > 1$ oder $a < -1$
- **Gestauchte Parabel:** $0 < a < 1$ oder $-1 < a < 0$

Da $a$ bei der Normalparabel $1$ ist, wird es in der Formel oft weggelassen.

## Parabel auf der y-Achse verschoben $y = ax^2 + c$

Jetzt kennst du die Formel $y = ax^2$. Aber was bedeutet $c$?

- **$c$ gibt an, um wie viel die Parabel auf der y-Achse verschoben ist.**
- Ist $c$ **positiv**, verschiebt sich die Parabel **nach oben**:  
  $$ y = ax^2 + c $$
- Ist $c$ **negativ**, verschiebt sich die Parabel **nach unten**:  
  $$ y = ax^2 - c $$

## Parabel auf der x-Achse verschoben $y = (x - d)^2 + c$

Zusätzlich zu $a$ und $c$ gibt es noch den Parameter $d$, der die **Verschiebung auf der x-Achse** angibt.

Hier gibt es eine Besonderheit:

- Ist die Parabel nach **rechts** verschoben, ist $d$ **negativ**.
- Ist die Parabel nach **links** verschoben, ist $d$ **positiv**.

**Warum?**  
In der Formel steht $(x - d)$:
- Wenn $d = 3$, ergibt sich $(x - 3)$ → Die Parabel ist um **3 nach rechts verschoben**.
- Wenn $d = -3$, ergibt sich $(x + 3)$ → Die Parabel ist um **3 nach links verschoben**.

### Merke:
- **Nach links verschoben**: $d$ **positiv** $(+d)$
- **Nach rechts verschoben**: $d$ **negativ** $(-d)$

# Test für funktionierenden Graphen

:::graph
funktion=y=2*x^2
xmin=-10
xmax=10
ymin=-10
ymax=10
:::

:::graph
funktion=y=Math.sin(x)
xmin=-10
xmax=10
ymin=-2
ymax=2
:::

# Mehrere Funktionen in einem Graphen

:::graph
funktion=y=x**2
funktion=y=Math.sin(x)
funktion=y=Math.cos(x)
xmin=-10
xmax=10
ymin=-2
ymax=10
:::