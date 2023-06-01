
# Tips and Trips - Blog de Viajes

Progress: [████████████████████████████████░░░░░░░░] 70%

Task:
    ✅Realizar la página de trips/[nombre]


<p align="center" display='flex'>
  <img src="./public/images/logo3.png" alt="Tips and Trips Logo" width="150px" />
</p>

## URL
https://nextjs-git-main-ismanoallaps4.vercel.app/


## Descripción del Proyecto
¡Bienvenido/a al repositorio del proyecto Tips and Trips! Este repositorio contiene el código fuente y los recursos relacionados con el desarrollo del blog de viajes Tips and Trips, construido con Next.js. 13 A continuación, encontrarás toda la información necesaria para comprender el proyecto, contribuir a su desarrollo y utilizar Next.js.

Tips and Trips es un blog de viajes dedicado a inspirar a los viajeros, compartir consejos útiles y brindar información detallada sobre destinos populares alrededor del mundo. Nuestro objetivo principal es crear una comunidad en línea para viajeros apasionados que deseen compartir sus experiencias y descubrimientos.

El blog se construirá utilizando Next.js 13.4 (app estable/BETA), un framework de React.js que facilita el desarrollo de aplicaciones web modernas y optimizadas para el rendimiento. Next.js nos brinda capacidades de renderizado del lado del servidor (SSR) y generación de páginas estáticas, lo que mejora la velocidad y la experiencia del usuario.

## Estructura de Carpetas

- `/components`: Componentes reutilizables de React utilizados en el blog.
- `/app`: Páginas de Next.js que representan las diferentes rutas del blog.
    - `/tips`
    - `/trips`: Pagina principal de Trips con su contenido.
        - `/[nombre]`: Pagina secundaria de Trips con su contenido que dependerá del [nombre] del continente.
            - `/[id]`: Pagina secundaria de Trips/[nombre] con su contenido que dependerá del {id} que le pasemos al realizar la búsqueda.
- `/public`: Recursos estáticos accesibles públicamente, como imágenes y archivos descargables.
    - `/images`: Contiene las imagenes que luego se van a renderizar en la web.

## Información para entender la estructura del proyecto y sus archivos

##### NextJS 13

Next. js es un framework minimalista para crear aplicaciones de JavaScript de una sola página de una manera simple. 
Se centra en el rendimiento y la compatibilidad inmediata con la representación del lado del servidor (SSR - Server Side Rendering).

###### Esto que quiere decir?
Tips & Trips es una web creada del lado del servidor en casi toda su totalidad ya que algunos componentes son necesarios cargarlos del lado del cliente.
Esta es su principal diferencia con una web creada con HTML,CSS Y Javascript vanilla que lo que estaría creando es una web  CSR (Client-Side Rendering).

1. Una web de servidor o SSR (Server-Side Rendering) implica que el servidor genera el contenido HTML completo y lo envía al cliente. 
En este caso, el servidor es responsable de procesar y renderizar el contenido antes de enviarlo al navegador. Esto puede ser útil en escenarios donde se requiere una carga inicial rápida o cuando es necesario optimizar para motores de búsqueda.
2. Una web de cliente (CSR), la generación del contenido y su renderización se realiza en el navegador del cliente. El navegador descarga los archivos HTML, CSS y JavaScript y luego ejecuta el JavaScript para manipular el DOM y generar dinámicamente el contenido en el lado del cliente. Esto significa que la mayor parte del procesamiento y generación del contenido ocurre en el navegador.



Ahora explicaré brevemente que son los archivos _page.jsx_ y _layout.jsx_.

##### Page.jsx
El archivo Page.js es un componente que representa una página individual en una aplicación Next.js. En Next.js, cada archivo JavaScript dentro del directorio /app se considera una ruta de página.
Por lo tanto, Page.js podría ser cualquier nombre de archivo dentro de este directorio.

Su estructura podría ser la siguiente:

```javascript
import React from 'react';

const Page = () => {
  return (
    <div>
      // Contenido de la página
    </div>
  );
};

export default Page;
```
##### Layout.jsx
El archivo Layout.jsx es un componente que define la estructura y el diseño general de una página en Next.js. 
Es común utilizar un componente de diseño para mantener una estructura coherente en todas las páginas de la aplicación.

Su estructura podría ser la siguiente:

```javascript
import React from 'react';
const Layout = ({ children }) => {
  return (
    <div>
      // Encabezado común
      <header>
        // Contenido del encabezado
      </header>

      // Contenido de la página
      <main>{children}</main>

      // Pie de página común
      <footer>
        // Contenido del pie de página
      </footer>
    </div>
  );
};
export default Layout;
```

##### CSS Modules
La principal diferencia entre CSS y CSS Modules radica en su alcance y encapsulamiento de estilos. Mientras que CSS aplica estilos globalmente y puede tener colisiones, CSS Modules ofrece un alcance local con nombres de clase únicos para cada componente, evitando colisiones y brindando mayor modularidad en la gestión de estilos en componentes individuales.

CSS Modules es una técnica que permite el encapsulamiento de estilos en componentes individuales en aplicaciones web. Genera nombres de clase únicos para evitar colisiones y permite importar y utilizar estilos en archivos JavaScript. Es una forma eficiente de modularizar y gestionar estilos en proyectos web.

## Tecnologías y herramientas utilizadas

Este proyecto se ha desarrollado utilizando las siguientes tecnologías y herramientas:

| Tecnología/Herramienta | Descripción |
| --------------------- | ----------- |
| [HTML](https://developer.mozilla.org/docs/Web/HTML) | Lenguaje de marcado utilizado para estructurar y organizar el contenido de las páginas web. |
| [CSS](https://developer.mozilla.org/docs/Web/CSS) | Lenguaje de estilos utilizado para definir la apariencia y el diseño de los elementos HTML. |
| [CSS Modules](https://github.com/css-modules/css-modules) | Técnica utilizada para el encapsulamiento y modularización de estilos en componentes individuales. |
| [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) | Lenguaje de programación utilizado para agregar interactividad y funcionalidad a las páginas web. |
| [React](https://reactjs.org/docs) | Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables. |
| [Next.js](https://nextjs.org/docs) | Framework de React utilizado para crear aplicaciones web de rendimiento optimizado con enrutamiento y renderizado del lado del servidor (SSR). |
| [Vercel](https://vercel.com/docs) | Plataforma de implementación y alojamiento web utilizada para desplegar aplicaciones de Next.js y otros frameworks. |
| [Firebase](https://firebase.google.com/docs) | Plataforma de desarrollo de aplicaciones web y móviles utilizada para el almacenamiento de datos, autenticación, hosting y más. |
| [JSON](https://www.json.org/json-es.html) | Formato de datos utilizado para el intercambio y almacenamiento de información estructurada. |
| [Visual Studio Code (VSCode)](https://code.visualstudio.com/docs) | Entorno de desarrollo integrado (IDE) utilizado para escribir, editar y depurar código. |



Estas tecnologías se combinan para crear una aplicación web moderna y escalable con una estructura organizada y estilos modularizados.

## Instalación y Uso de Next.js

1. Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde el sitio web oficial de Node.js: [https://nodejs.org](https://nodejs.org)

2. Abre una terminal y dirígete a la carpeta donde deseas crear tu nuevo proyecto con Next.js.

3. Ejecuta el siguiente comando para crear un nuevo proyecto de Next.js:

   ```shell
   npx create-next-app nombre-del-proyecto
    ```
4. Navega a la carpeta raíz del proyecto en la terminal:
     ```shell
   cd nombre-del-proyecto
    ```
5. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
     ```shell
   npm run dev
    ```
6. Explora y personaliza el proyecto de Next.js según tus necesidades. Puedes editar el archivo app/layout.js para modificar la página principal de tu aplicación. También puedes agregar componentes, estilos y rutas adicionales en las carpetas correspondientes.

## Contribución

Agradecemos cualquier contribución que desees realizar para mejorar el blog de Tips and Trips. Si deseas contribuir, sigue los siguientes pasos:

1. Crea un fork de este repositorio y clónalo en tu máquina local.

2. Instala las dependencias del proyecto utilizando npm install.

3. Realiza los cambios o mejoras que consideres necesarios en una nueva rama.

4. Asegúrate de seguir las guías de estilo y las mejores prácticas de codificación.

5. Realiza las pruebas necesarias para verificar que tus cambios funcionan 
correctamente.

6. Envía una solicitud de extracción (pull request) con tus cambios detallando las mejoras realizadas.

## Equipo 
 - Ismael Fonseca Cid - Desarrollador principal - ismanoallaPS4@gmail.com

## Recursos Externos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://reactjs.org/docs)
- [Documentación de CSS](https://developer.mozilla.org/es-ES/docs/Web/CSS)

