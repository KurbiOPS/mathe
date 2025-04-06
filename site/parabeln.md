# Die quadratische Funktion (Parabeln)

## Parabelnformeln im Überblick:

- **Normalparabel:** $y = x^2$
- **Gestreckte oder gestauchte Parabel:** $y = ax^2$
- **Auf der y-Achse verschoben:** $y = ax^2 + c$
- **Auf der x-Achse verschoben:** $y = (x - d)^2$
- **Auf der x- und y-Achse verschoben:** $y = (x - d)^2 + c$

## Normalparabel $y = x^2$

Die Normalparabel ist der „Standard“ aller Parabeln.

### Erkennung ohne Messung
Anhand der unten eingezeichneten Punkte kann man erkennen, ob es sich um eine Normalparabel handelt. 


:::graph
funktion=y=x^2
xmin=-10
xmax=10
ymin=-5
ymax=10
:::


- hier bei gibt es einen Punkt dieser ist wenn ihr fom Scheitelpunkt aus 1 nach oben und 1 nach rechts oder nach links geht. 
  - Sobald ihr 1 nach oben und eins zur Seite  gegangen seit und danach auf der Parabel seit, wisst ihr das es eine Normalparabel ist.
    - sprich $a = 1$
- Natürlich geht das auch wenn ihr zuerst 1 zur Seite und danach 1 nach oben geht 

Im unten gezeigten Koordinatensystem kann man es sehr gut sehen weas ich meine:


:::graph
funktion=y=x^2
xmin=-2
xmax=2
ymin=-0
ymax=2
:::


### Die Normalparabel kann auch nach unten geöffnet sein.

Dann muss jedoch vor dem $x^2$ ein $-$ stehen ($y=-x^2$)

:::graph
funktion=y=-1*x^2
xmin=-10
xmax=10
ymin=-10
ymax=5
:::

- Bei einer nach unten geöffnete Parabel muss man für die Erkennung nicht um 1 nach oben, sondern nach unten: 
  - was ich damit sagen möchte ist das man zur erkennung hier um 1 nach unten und 1 zur Seite muss.
- Hierbei ist es auch weider egal in welche Richtung man zuerst geht.

Hier kann man es auch wieder im unten dargestellten Koordinatensystem sehen:

:::graph
funktion=y=-1*x^2
xmin=-3
xmax=3
ymin=-2
ymax=1
:::


## Gestreckte und gestauchte Parabel $y = ax^2$

### Gestreckte Parabel
Gestreckte Parabeln sind „enger“ als die Normalparabel
- sie verlaufen innerhalb der oben genannten Punkte 


### Gestauchte Parabel
Gestauchte Parabeln sind „breiter“ als die Normalparabel
- Sie verläuft anders als die gestreckte Parabel außerhalb der oben genannten Punkte 



### Was ist die Variable $a$?
Die allgemeine Formel ist:
$y = ax^2$



- **Normalparabel:** $a = 1$
- **Gestreckte Parabel:** $a > 1$ oder $a < -1$
- **Gestauchte Parabel:** $0 < a < 1$ oder $-1 < a < 0$
- **Nach unten geöffnete Parabel:** wenn vor $a$ ein $-$ steht, ist die Parabel nach unten geöffnet (das gilt für alle Parabeln)

Da $a$ bei der Normalparabel $1$ ist, wird es in der Formel oft weggelassen. 
- Da sich eine Zahl nicht ändert wenn sie mit $1$ multipliziert wird.

In diesem Bild könnt ihr die **verschiedenen Fälle** sehen 

:::graph
funktion=y=x^2
funktion=y=0,5*x^2
funktion=y=2*x^2
funktion=y=-1*x^2 
xmin=-10
xmax=10
ymin=-20
ymax=50
:::


## Parabel auf der y-Achse verschoben $y = ax^2 + c$

Jetzt kennst du den Formelblock $y = ax^2$. Nun kommt aber noch $c$ dazu, doch was ist $c$ jetzt überhaupt?

- **$c$ gibt an, um wie viel die Parabel auf der y-Achse verschoben ist.**
- Ist $c$ **positiv**, verschiebt sich die Parabel **nach oben**:  
  $$ y = ax^2 + c $$
- Ist $c$ **negativ**, verschiebt sich die Parabel **nach unten**:  
  $$ y = ax^2 - c $$

Hier ein Beispiel für beide Verschiebungen

:::graph
funktion=y=x**2+2
funktion=y=x**2-2
xmin=-10
xmax=10
ymin=-5
ymax=10
:::


## Parabel auf der x-Achse verschoben $y = a(x - d)^2$

Zusätzlich zu $a$ und $c$ gibt es noch die Variable $d$, die die **Verschiebung auf der x-Achse** angibt.

Hier gibt es eine Besonderheit:

- Ist die Parabel nach **rechts** verschoben, ist $d$ **negativ**.
- Ist die Parabel nach **links** verschoben, ist $d$ **positiv**.

**Warum?**  
In der Formel steht $(x - d)$:
- Ist die Parabel zum Beispiel um **$3$ nach rechts** verschoben, so wird für $d$ $-3$ eingestetz → dann ergibt sich $(x - 3)^2$  
  - Das $-$ steht deshalb da, weil in der Formel schon ein $-$ steht. 
    - **Das liegt daran das ein $-$ und ein $+$ nebeneinander stehen und $-+=-$ berechnet man in dem Fall $-$**
- Ist die Parabel im anderen Fall um **$3$ nach links** verschoben, so wird für $d$ $3$ eingestetz → dann ergibt sich $(x + 3)^2$ 
  - Das ganze ist das selbe Prinzip wie im obrigen Beispiel nur das hier 
    - **Und da $-$ und $-$ da stehen und bei $-$ und $-$ kommt in dem Fall $+$ raus und daher kommt das $+$**

### Merke:
- **Nach links verschoben:** $d$ **positiv** $(+d)$
- **Nach rechts verschoben:** $d$ **negativ** $(-d)$

:::graph
funktion=y=(x-3)^2
funktion=y=(x+3)^2
xmin=-10
xmax=10
ymin=-10
ymax=50
:::

Hier bei kann die Parabel auch wieder gestreckt oder gestaucht sein


:::graph
funktion=y=2*(x-3)^2
funktion=y=0,5*(x+3)^2
xmin=-10
xmax=10
ymin=-10
ymax=50
:::


genauso wie sie auch nach unten geöffnet sein kann


:::graph
funktion=y=-2*(x-3)^2
funktion=y=-1*(x+3)^2
xmin=-10
xmax=10
ymin=-50
ymax=10
:::


## Parabel auf der x- und auf der y-Achse verschoben $y=a(x-d)^2+e$

Ihr wisst nun fast alle Fälle der Verschobenen Parabeln, nun kommt die letzte in der von allen etwas dabei ist.
**Wichtig:**
- Was ihr jetzt schon wisst, ist der Formelblock $y=(x-d)^2$ 
- Nun kommt noch $e$ dazu, wobei $e$ garnicht so neu ist wie gedacht denn:
  - denn $e=c$

Daher ist dieser "Block" nur eine Zusammensetzung von den anderen Blöcken.
Diese Parabeln können **nach oben** verschoben sein

:::graph
funktion=y=(x-3)^2+5
funktion=y=(x+3)^2+5
xmin=-10
xmax=10
ymin=-10
ymax=50
:::

Aber auch **nach unten**

:::graph
funktion=y=(x-3)^2-5
funktion=y=(x+3)^2-5
xmin=-10
xmax=10
ymin=-10
ymax=50
:::

genauso wie sie auch nach unten geöffnet sein, dann steht vor der Klammer ein $-$
**So lautet die Formel nun:** $y=-(x-d)^2+e$
hier bei kann sie auch wieder **nach oben** verschoben sein:

:::graph
funktion=y=-1*(x-3)^2+5
funktion=y=-1*(x+3)^2+5
xmin=-10
xmax=10
ymin=-50
ymax=10
:::

Aber auch wieder **nach unten** verschoben sein

:::graph
funktion=y=-1*(x-3)^2-5
funktion=y=-1*(x+3)^2-5
xmin=-10
xmax=10
ymin=-50
ymax=10
:::

Natürlich können diese Parabeln auch noch gestreckt oder gestaucht sein 


:::graph
funktion=y=2*(x-3)^2+2
funktion=y=2*(x+3)^2+2
funktion=y=-2*(x-3)^2+2
funktion=y=-2*(x+3)^2+2
funktion=y=2*(x-3)^2-2
funktion=y=2*(x+3)^2-2
funktion=y=-2*(x-3)^2-2
funktion=y=-2*(x+3)^2-2
xmin=-10
xmax=10
ymin=-10
ymax=50
:::



:::graph 
funktion=y=Math.sin(x)
funktion=y=Math.cos(x)
funktion=y=Math.tan(x)
xmin=-5
xmax=5
ymin=-5
ymax=5
:::
