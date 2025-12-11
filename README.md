# PracticaFinal-JavaScript

## 🌟 Pokédex - Descripción

El proyecto Pokédex Dinámica es una aplicación web simple cuyo objetivo es mostrar una lista de Pokémones de manera interactiva y visualmente atractiva, imitando el estilo de las primeras generaciones del videojuego. Utiliza tecnologías estándar de desarrollo web (HTML, CSS, JavaScript) y se conecta a la PokéAPI para obtener los datos necesarios (nombre, ID, imagen y tipos). La característica principal es que el usuario puede personalizar la cantidad de Pokémones a cargar (desde el ID 1 hasta el ID 1025).

### 🖼️ Estrategia de Solución

* **1. Carga Dinámica y Manejo de la API (Rendimiento):**
    * **Problema:** Obtener todos los registros individuales de la PokéAPI de manera eficiente sin que la aplicación se congele (mucho).
    * **Solución:** Se implementó un *pattern* de Promesas. Se genera un arreglo de Promesas (`promises`) dentro de un bucle `for` para lanzar todas las peticiones `fetch()` simultáneamente. La función `await Promise.all(promises)` se utiliza para esperar de forma asíncrona a que todos los datos regresen, garantizando la velocidad y el orden correcto de los Pokémones por ID.

* **2. Control de Cantidad Personalizada:**
    * **Problema:** Permitir al usuario definir la longitud de la lista de Pokémones.
    * **Solución:** Se utilizó un campo `<input type="number">` y un botón de "Cargar". Un *Event Listener* en el botón captura el valor ingresado y llama a la función principal `fetchPokemon(limite)` con la cantidad especificada. Se incluyó validación de entrada (`1` a `1025`) para evitar errores en la API.

* **3. Estilización de Tarjetas y Diseño Responsive:**
    * **Problema:** Alinear elementos y asegurar que la Pokédex se vea bien en cualquier dispositivo.
    * **Solución:** El contenedor principal (`pokedex-container`) utiliza `display: flex;` con `flex-wrap: wrap;` y `justify-content: center;` para crear una galería de tarjetas que se reordenan automáticamente al cambiar el tamaño de la ventana.

* **4. Soporte para Tipos Múltiples:**
    * **Problema:** Mostrar correctamente los tipos de Pokémones con doble clasificación (ej., Venasaur: Grass/Poison) sin errores de renderizado.
    * **Solución:** Dentro de la función `createPokemonCard`, se utiliza el método `map()` de JavaScript sobre el arreglo de tipos (`pokemon.types`). Esto genera dinámicamente una cadena de etiquetas HTML (`<span class="type-badge">`) para **cada tipo individual**, usando `.join('')` para insertarlas en el DOM como un bloque único.

* **5. Estilo Temático y Consistencia:**
    * **Problema:** Aplicar una estética cohesiva al proyecto.
    * **Solución:** Se configuró el CSS para utilizar la fuente **'Press Start 2P'** en el título principal y se definieron clases específicas (ej., `.type-fire`, `.type-fairy`) para asignar colores distintivos a los *badges* de tipo, mejorando la experiencia visual del usuario.

### ⚙️ Cómo Usar (Instrucciones de Instalación)

Dado que este proyecto solo utiliza código del lado del cliente (HTML, CSS, JS), no requiere un servidor complejo ni dependencias externas.

#### 1. Estructura de Archivos

Asegúrate de tener la siguiente estructura de carpetas:

```
/pokedex-proyecto 
├── index.html 
├── styles.css 
└── script.js
```

#### 2. Ejecutar la Aplicación

Simplemente abre el archivo `index.html` en tu navegador web (haciendo doble clic).

### 📝 Archivos Clave

| Archivo | Contenido | Notas |
| :--- | :--- | :--- |
| **`index.html`** | Estructura y enlazamiento de scripts. | Contiene el campo de entrada (`<input type="number">`) y el botón de carga. |
| **`styles.css`** | Diseño y apariencia. | Define los estilos de las tarjetas, botones y los colores para todos los tipos de Pokémon. |
| **`script.js`** | Lógica y datos. | Contiene las funciones `fetchPokemon` y `createPokemonCard` para manejar la API, la validación y el renderizado dinámico. |

### 👤 Créditos

Hecho por **Gerardo Daniel García Cerda**
Para el programa de becarios **DGTIC Ingeniería de Software 2026-1**

* **Datos:** [PokéAPI](https://pokeapi.co/)
* **Iconografía:** [Pokeball SVG](https://es.wikipedia.org/wiki/Archivo:Pok%C3%A9_Ball_icon.svg) de Wikimedia Commons.