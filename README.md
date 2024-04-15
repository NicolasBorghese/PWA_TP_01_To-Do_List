<div align="center">
Programación Web Avanzada 2024

<h1>Trabajo Práctico N°1: React</h1>
Aplicación de Lista de Tareas (To-Do List)
<div>

---

<h3>Integrantes</h3>

- Borghese Nicolás FAI-997
- Blanco Julián FAI-3858

---

<h3>Funcionamiento de los archivos iniciales</h3>

index.js<br>
Este archivo es el punto de entrada de la aplicación React. Su función principal es montar el componente de React principal (por ejemplo, App) al DOM usando ReactDOM. Es aquí donde React se "engancha" al HTML, específicamente a un elemento con un id generalmente llamado root. Aquí también es común envolver la aplicación en proveedores de contexto o envolverla con enrutadores o temas si se utilizan.

App.js<br>
Este es el componente raíz de la aplicación. Esencialmente, sirve como contenedor para todos los otros componentes de la aplicación. Aquí se define la estructura inicial de la aplicación y se realizan los enrutamientos y llamadas a otros componentes.

index.css<br>
Este archivo contiene los estilos CSS globales de la aplicación. Al utilizar import './index.css'; en el archivo index.js, estos estilos se aplicaran a todos los componentes que se importen globalmente.

package.json<br>
Este archivo es un manifiesto del proyecto que incluye metadatos (como el nombre del proyecto, versión, descripción, etc.), además de listar las dependencias de npm que necesita el proyecto.

