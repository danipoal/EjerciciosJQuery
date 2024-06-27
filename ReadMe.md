# Juego de Cartas Interactivo

Este proyecto implementa un juego de cartas interactivo utilizando TypeScript. A continuación se detalla su funcionalidad y estructura:

## Variables y Constantes

- **cartas**: Selecciona todos los elementos con la clase `carta` en el documento.
- **divResultado**: Selecciona el elemento con el id `resultado` y lo tipa como `HTMLDivElement`.

## Interfaces

- **SelectableImageElement**: Extiende `HTMLImageElement` para incluir un atributo adicional `isSelected`.

## Arrays

- **archivos**: Contiene los nombres de archivos de imágenes de cartas.
- **traducciones**: Contiene las traducciones de los nombres de las cartas.

## Funciones

### `randomCard()`
Esta función devuelve un nombre de archivo de carta aleatorio.
### `traducir()`
Toma el string dentro de el array de los archivos y lo convierte en un string entendible a la hora de imprimir el resultado

### `comparacioCartas()`
Compara las cartas seleccionadas y devuelve la posición de las dos cartas coincidentes junto con el nombre del archivo de la carta que coincide.

### `imprimirResultado()`
Imprime el resultado de la comparación en el elemento `divResultado`.

## Lógica de Eventos

### Inicialización y Eventos de Carta

- Inicializa cada carta con el estado `isSelected` en `false`.
- Maneja eventos `mouseover`, `mouseleave` y `click` para cada carta:
  - **mouseover**: Muestra la cara frontal de la carta si no está seleccionada.
  - **mouseleave**: Muestra la cara trasera de la carta si no está seleccionada.
  - **click**: Selecciona una carta aleatoria y la muestra, actualizando el estado `isSelected` y el array `resultados`. Si la carta ya estaba seleccionada, la vuelve a su estado inicial y actualiza el array `resultados`.

### Resumen del Flujo del Juego

1. **Selección de Cartas**: El usuario puede seleccionar una carta haciendo clic en ella. Esto muestra una imagen de carta aleatoria y marca la carta como seleccionada.
2. **Comparación de Cartas**: Cada vez que una carta es seleccionada, se añade al array `resultados` y se compara con las otras cartas seleccionadas para encontrar coincidencias.
3. **Impresión del Resultado**: Si se encuentra una coincidencia, el resultado se muestra en el `divResultado`. Si una carta seleccionada se vuelve a hacer clic, se deselecciona y se actualiza el array `resultados`.

Documentado by Daniel Álvarez, 27/06/2024. 