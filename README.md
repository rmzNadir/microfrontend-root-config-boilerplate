# Configuración base

Este repo contiene una plantilla de configuración base para un proyecto de front-end basado en una arquitectura de microservicios.

## Uso

- Cargar (de ser necesario) las hojas de estilo, fuentes y paquetes correspondientes usando una CDN en el archivo src/index.ejs.
- Añadir (o modificar) las dependencias compartidas por los micro front-ends al importmap dentro del archivo src/index.ejs (línea 39).
- Actualizar el importmap dentro del archivo src/index.ejs con la información de los micro front-ends del proyecto (líneas 63 y 72 para entorno local y producción correspondientemente).

## Plantilla de micro front-end

[Repositorio](https://github.com/rmzNadir/microfrontend-app-boilerplate)
