# PracticaFinal-JavaScript

## 🌟 Pokédex Dinámica

Este proyecto es una Pokédex simple y moderna creada con HTML, CSS y JavaScript Vanilla. Utiliza la [PokéAPI](https://pokeapi.co/) para cargar dinámicamente datos de Pokémones, permitiendo al usuario seleccionar cuántos Pokémones desea visualizar en la lista.

### 🖼️ Características

* **Carga Dinámica:** Obtiene datos (nombre, ID, imagen y tipos) de la PokéAPI.
* **Diseño Responsivo:** Tarjetas flexibles que se adaptan al tamaño de la pantalla.
* **Selección Personalizada:** Permite al usuario elegir la cantidad de Pokémones a mostrar (hasta 1025).
* **Estilo Retro:** Uso de la fuente 'Press Start 2P' para el título, dándole un toque clásico de videojuego.
* **Tipos con Colores:** Cada tipo de Pokémon tiene su propio color distintivo (Grass, Fire, Water, Fairy, etc.).
* **Soporte Doble Tipo:** Muestra correctamente las etiquetas para Pokémones que tienen dos tipos.

### 🚀 Tecnologías Utilizadas

| Tecnología | Propósito |
| :--- | :--- |
| **HTML5** | Estructura básica de la página. |
| **CSS3** | Estilizado, uso de Flexbox para la alineación y colores de tipos. |
| **JavaScript (Vanilla)** | Conexión con la API (`fetch`), manipulación del DOM y lógica de la aplicación. |
| **PokéAPI** | Fuente de datos para todos los Pokémones. |
| **Google Fonts** | Uso de 'Roboto' y 'Press Start 2P'. |

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
* **Iconografía:** Pokeball SVG de Wikimedia Commons.