# Actividad 3 

## Descripción

Este proyecto fue desarrollado en **TypeScript** utilizando una estructura por paquetes para organizar el código. El objetivo es administrar información de clientes y productos mediante un menú interactivo desde la consola.

Para simplificar el desarrollo, la información se encuentra almacenada en archivos `.ts` dentro de la carpeta **data**, utilizando arreglos con datos iniciales (datos quemados).

---

## Objetivos

- Aplicar la programación modular en TypeScript.
- Organizar el código utilizando paquetes.
- Manipular arreglos de objetos.
- Implementar un menú interactivo mediante consola.
- Validar la información ingresada por el usuario.
- Separar responsabilidades entre modelos, servicios, datos y utilidades.

---

## Estructura del proyecto

```
src
│
├── data
│   ├── productos.ts
│   └── usuarios.ts
│
├── menu
│   └── menu.ts
│
├── models
│   ├── cliente.ts
│   └── producto.ts
│
├── services
│   ├── clienteService.ts
│   └── productoService.ts
│
├── utils
│   └── readline.ts
│
└── index.ts
```

---

## Descripción de las carpetas

### data

Contiene los arreglos con la información inicial de clientes y productos.

### models

Define las interfaces utilizadas por el sistema.

### services

Contiene la lógica para agregar y mostrar clientes y productos.

### menu

Implementa el menú principal y controla la interacción con el usuario.

### utils

Incluye funciones auxiliares para la lectura de datos desde la consola utilizando `readline`.

### index

Es el punto de entrada del programa.

---

## Funcionalidades

El sistema permite:

- Mostrar clientes.
- Mostrar productos.
- Agregar clientes.
- Agregar productos.
- Validar datos antes de agregarlos.
- Salir del programa.

---

## Tecnologías utilizadas

- TypeScript
- Node.js
- readline

---

## Ejecución

Instalar las dependencias:

```bash
npm install
```

Compilar el proyecto:

```bash
npx tsc
```

Ejecutar el programa:

```bash
node dist/index.js
```

---

## Autor

Actividad desarrollada como práctica académica para aplicar los conceptos de organización de proyectos en TypeScript, programación modular y manejo de estructuras de datos.