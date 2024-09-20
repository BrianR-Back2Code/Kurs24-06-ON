# HTML
<details>
  
### 1. Überschriften
```
<h1>Überschrift 1</h1>
<h2>Überschrift 2</h2>
<h3>Überschrift 3</h3>
```
Markdown:
# Überschrift 1
## Überschrift 2
### Überschrift 3

### 2. Absätze
```
<p>Dies ist ein Absatz.</p>
```
Markdown:
Dies ist ein Absatz.

### 3. Links
```
<a href="https://example.com">Dies ist ein Link</a>
```
Markdown:
[Dies ist ein Link](https://example.com)

### 4. Bilder
```
<img src="bild-url.jpg" alt="Beschreibung des Bildes">
```
Markdown:
![Beschreibung des Bildes](bild-url.jpg)

### 5. Fettdruck und Kursiv
```
<strong>Fetter Text</strong>
<em>Kursiver Text</em>
```
Markdown:
**Fetter Text**
*Kursiver Text*

### 6. Listen

**Geordnete Liste (nummeriert)**:
```
<ol>
  <li>Punkt 1</li>
  <li>Punkt 2</li>
</ol>
```
Markdown:
1. Punkt 1
2. Punkt 2

**Ungeordnete Liste**:
```
<ul>
  <li>Punkt 1</li>
  <li>Punkt 2</li>
</ul>
```
Markdown:
- Punkt 1
- Punkt 2

### 7. Tabellen
```
<table>
  <tr>
    <th>Spalte 1</th>
    <th>Spalte 2</th>
  </tr>
  <tr>
    <td>Wert 1</td>
    <td>Wert 2</td>
  </tr>
</table>
```
Markdown:
| Spalte 1 | Spalte 2 |
|----------|----------|
| Wert 1   | Wert 2   |

### 8. Code-Blöcke
```
<pre>
<code>
  Dies ist ein Code-Block.
</code>
</pre>
```
<pre>
<code>
  Dies ist ein Code-Block.
</code>
</pre>
</details>

# CSS

<details>
  
## CSS-Grundlagen

CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die verwendet wird, um das Layout und das Aussehen von HTML-Dokumenten zu gestalten. Hier sind einige der grundlegenden Befehle:

### 1. **Selektoren**

- **Elementselektor**: Stile für bestimmte HTML-Elemente.
  ```css
  p {
    color: blue;
  }
  ```
- **Klassenselektor**: Stile für Elemente mit einer bestimmten Klasse.
  ```css
  .my-class {
    background-color: yellow;
  }
  ```
- **ID-Selektor**: Stile für ein Element mit einer bestimmten ID.
  ```css
  #my-id {
    font-size: 20px;
  }
  ```

### 2. **Text-Formatierung**

- **Farbe festlegen**:
  ```css
  color: red;
  ```

- **Schriftgröße ändern**:
  ```css
  font-size: 16px;
  ```

- **Schriftart setzen**:
  ```css
  font-family: 'Arial', sans-serif;
  ```

### 3. **Box-Modell**

- **Padding** (Innenabstand):
  ```css
  padding: 10px;
  ```

- **Margin** (Außenabstand):
  ```css
  margin: 20px;
  ```

- **Rahmen (Border)**:
  ```css
  border: 2px solid black;
  ```

### 4. **Hintergrund**

- **Hintergrundfarbe**:
  ```css
  background-color: lightgrey;
  ```

- **Hintergrundbild**:
  ```css
  background-image: url('image.jpg');
  ```

### 5. **Layout**

- **Breite und Höhe**:
  ```css
  width: 100px;
  height: 200px;
  ```

- **Flexbox**:
  ```css
  display: flex;
  justify-content: center;
  align-items: center;
  ```

### 6. **Pseudo-Klassen**

- **Hover-Effekt**:
  ```css
  a:hover {
    color: green;
  }
  ```

- **Erstes Kind**:
  ```css
  li:first-child {
    font-weight: bold;
  }
  ```

</details>
