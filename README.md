<div align="center">

Programación Web Avanzada 2024

<h3>Trabajo Práctico N°1: React</h3>
Aplicación de Lista de Tareas (To-Do List)

</div>

---

<h3>Grupo 4</h3>

- Borghese Nicolás FAI-997
- Blanco Julián FAI-3858

---

<h3>Descripción de la aplicación</h3>

La aplicación es un sitio web para administrar las tareas de un usuario. Permite agregar nuevas tareas, cambiar su estado y borrarlas. Cuenta con un contador para saber cuantas tareas se encuentran completas y un filtro para buscarlas más rápido.

---

<h3>Instrucciones de instalación</h3>

1. Ubicar la terminal en el directorio deseado para instalar el proyecto y clonar el repositorio ejecutando en consola el comando: `git clone https://github.com/NicolasBorghese/PWA_TP_01_To-Do_List.git`
2. Acceder a la carpeta donde se instalo el proyecto con el comando: `cd PWA_TP_01_To-Do_List`
3. Instalar las dependencias necesarias para el proyecto ejecutando el comando: `npm install`
4. Ejecutar la aplicación utilizando el comando `npm start`

---

<h3>Funcionamiento de los archivos iniciales</h3>

<h4>index.js</h4>
Este archivo es el punto de entrada de la aplicación React. Su función principal es montar el componente de React principal (por ejemplo, App) al DOM usando ReactDOM. Es aquí donde React se "engancha" al HTML, específicamente a un elemento con un id generalmente llamado root. Aquí también es común envolver la aplicación en proveedores de contexto o envolverla con enrutadores o temas si se utilizan.

<h4>App.js</h4>
Este es el componente raíz de la aplicación. Esencialmente, sirve como contenedor para todos los otros componentes de la aplicación. Aquí se define la estructura inicial de la aplicación y se realizan los enrutamientos y llamadas a otros componentes.

<h4>index.css</h4>
Este archivo contiene los estilos CSS globales de la aplicación. Al utilizar import './index.css'; en el archivo index.js, estos estilos se aplicaran a todos los componentes que se importen globalmente.

<h4>package.json</h4>
Este archivo es un manifiesto del proyecto que incluye metadatos (como el nombre del proyecto, versión, descripción, etc.), además de listar las dependencias de npm que necesita el proyecto.