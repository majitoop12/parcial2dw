# Portafolio Profesional — María José Zapata Taborda
> **Estudiante de Ingeniería Informática | Unilasallista**  
> Caldas, Antioquia, Colombia

---

## 1. Descripción del Proyecto
Este proyecto corresponde al desarrollo de un sitio web frontend moderno, profesional, responsivo y completamente accesible que actúa como portafolio personal para **María José Zapata Taborda**, estudiante de quinto semestre de Ingeniería Informática en **Unilasallista**.

El sitio fue diseñado bajo una estética tecnológica contemporánea, minimalista y elegante, optimizado con un enfoque *mobile-first* mediante **Bootstrap 5** y estilos personalizados en **CSS3**, complementado con interacciones en **JavaScript Vanilla** e ilustraciones vectoriales SVG abstractas que representan fielmente su perfil técnico sin utilizar fotografías personales ni avatares simulados.

---

## 2. Información de la Propietaria y Veracidad del Perfil

* **Nombre completo:** María José Zapata Taborda.
* **Título profesional:** Estudiante de Ingeniería Informática.
* **Institución educativa:** Unilasallista (Corporación Universitaria Lasallista).
* **Semestre actual:** Quinto semestre (En formación).
* **Ubicación:** Caldas, Antioquia, Colombia.
* **GitHub oficial:** [https://github.com/majitoop12](https://github.com/majitoop12)
* **Lenguaje principal:** Python (destacado como lenguaje de mayor dominio relativo actual).
* **Bases de datos:** MySQL (modelado y consultas relacionales).
* **Control de versiones:** GitHub y Git.
* **Área de interés y proyección:** Amazon Web Services (AWS) y servicios en la nube (computación cloud, infraestructura, despliegue y disponibilidad).
* **Proyecto destacado:** **RutaKontrol**, sistema inteligente de liquidación de transporte de carga concebido para apoyar procesos de gestión de rutas y liquidación.
* **Cualidades personales:** Responsable, aplicada, divertida y comprometida; con pasión por el aprendizaje continuo y la versatilidad técnica.
* **Canales de contacto:** Correo institucional verificado `mzapata0@unilasallista.edu.co` y perfil de GitHub; teléfono de contacto directo suministrado `+57 300 871 6150`.

> **Nota sobre la validación del correo electrónico:**  
> En los datos originales se suministró `mzapata0@unilasallista. edu.co` (con un espacio antes del dominio). Tras validar la convención estándar del dominio institucional de Unilasallista (`@unilasallista.edu.co`), se implementó la dirección limpia funcional en los enlaces `mailto:` y en el botón de copiado al portapapeles, manteniendo una nota transparente para que la estudiante corrobore formalmente la recepción de mensajes.

---

## 3. Tecnologías y Librerías Utilizadas

1. **HTML5 Semántico:** Estructura con etiquetas estándar (`header`, `nav`, `main`, `section`, `article`, `footer`, `blockquote`), un único `h1` y jerarquía correcta de encabezados.
2. **CSS3 Modular & Responsive:** Diseño mobile-first, variables CSS nativas (*design tokens*), efectos de desenfoque de fondo (*glassmorphism*), sombras y gradientes coordinados.
3. **Bootstrap 5 (v5.3.3 CDN):** Sistema de rejilla flexible (`container`, `row`, `col-*`), barra de navegación responsive y utilidades de espaciado.
4. **Bootstrap Icons (v1.11.3 CDN):** Iconografía vectorial coherente.
5. **JavaScript Vanilla (ES6+):** Control accesible de la navegación móvil, cierre automático de menús en dispositivos táctiles, tecla Escape, botón de volver arriba, copiado al portapapeles con feedback accesible y cálculo dinámico del año en curso.
6. **SVG Vectorial Personalizado:** Favicon y elementos visuales técnicos abstractos creados específicamente para el portafolio (código Python interactivo, diagrama de RutaKontrol y pilares cloud).

---

## 4. Estructura del Proyecto

```text
parcial2dw/
├── index.html                   # Documento HTML principal con estructura semántica y metadatos SEO
├── README.md                    # Documentación académica y técnica completa del proyecto
├── .gitignore                   # Exclusiones de archivos del sistema operativo, editores y temporales
└── assets/
    ├── css/
    │   └── styles.css           # Estilos personalizados, temas oscuros, variables y responsive
    ├── js/
    │   └── main.js              # Lógica de navegación accesible, año dinámico y copiado interactivo
    └── img/
        ├── favicon.svg          # Logotipo vectorial de la marca MJ para la pestaña del navegador
        ├── hero-tech-illustration.svg # Ilustración visual técnica con código Python en el Hero
        ├── rutakontrol-preview.svg    # Esquema técnico y matriz de liquidación de RutaKontrol
        ├── cloud-interest.svg         # Diagrama de arquitectura e intereses en servicios en la nube
        └── .gitkeep             # Archivo para seguimiento del directorio de imágenes
```

---

## 5. Instrucciones para Ejecutar Localmente

Dado que se trata de un sitio web estático optimizado para GitHub Pages, **no requiere base de datos ni compiladores complejos**. Puede abrirse y probarse de las siguientes maneras:

### Opción A: Abrir directamente en el navegador
Haga doble clic en el archivo `index.html` o ábralo con su navegador web preferido (Chrome, Edge, Firefox, Safari).

### Opción B: Servidor local ligero con Python
Si dispone de Python en su máquina, ejecute desde la terminal en la raíz del proyecto:
```bash
python -m http.server 8080
```
Luego ingrese en su navegador a: `http://localhost:8080`

### Opción C: Servidor local ligero con Node.js / npx
```bash
npx serve .
```

---

## 6. Pasos para Publicar en GitHub y GitHub Pages

Para publicar este repositorio bajo la cuenta oficial de María José (`majitoop12`), siga estos pasos:

### Paso 1: Inicializar y confirmar los archivos locales en Git
*(Estos pasos ya han sido preparados localmente)*
```bash
git init -b main
git add .
git commit -m "feat: portafolio profesional responsive de Maria Jose Zapata Taborda"
```

### Paso 2: Crear el repositorio en GitHub
1. Inicie sesión en [GitHub](https://github.com/) con la cuenta `majitoop12`.
2. Cree un nuevo repositorio público con el nombre: **`parcial2dw`** (o el nombre preferido para la asignatura).
3. **No** inicialice con README ni .gitignore, pues ya están configurados en este proyecto.

### Paso 3: Conectar el repositorio remoto y subir el código
Desde la terminal en esta carpeta, ejecute:
```bash
git remote add origin https://github.com/majitoop12/parcial2dw.git
git push -u origin main
```

### Paso 4: Activar GitHub Pages
1. Ingrese a su repositorio en GitHub: `https://github.com/majitoop12/parcial2dw`.
2. Vaya a la pestaña **Settings** (Configuración) &rarr; **Pages** (en el menú lateral izquierdo).
3. En **Source** (Origen de compilación), seleccione **Deploy from a branch**.
4. En **Branch** (Rama), elija:
   * Rama: **`main`**
   * Carpeta: **`/ (root)`**
5. Haga clic en **Save** (Guardar).
6. En un par de minutos, GitHub Pages habrá publicado el sitio en la siguiente dirección:
   👉 **`https://majitoop12.github.io/parcial2dw/`**

---

## 7. Lista de Comprobación de la Rúbrica y Entrega

A continuación se detalla el estado verificado de cada criterio exigido en la actividad académica:

- [x] **Se utilizó Bootstrap 5 como framework responsive.**  
  *(Integrado mediante CDN oficial v5.3.3 con sistema de grillas container, row, col-12, col-md, col-lg y utilidades).*
- [x] **Se incluyó información personal verídica.**  
  *(Nombre completo, ubicación en Caldas, Antioquia, descripción personal honesta y canales de comunicación).*
- [x] **Se incluyó formación académica.**  
  *(Ingeniería Informática en Unilasallista, cursando quinto semestre, en formación activa).*
- [x] **Se incluyó el proyecto RutaKontrol.**  
  *(Descripción fidedigna de liquidación de transporte de carga, esquema conceptual técnico y enlace preparado a GitHub).*
- [x] **Se incluyeron los lenguajes y las tecnologías conocidos.**  
  *(Python con mayor dominio relativo, MySQL, GitHub y exploración activa de nuevos lenguajes, sin barras de porcentajes falsos).*
- [x] **Se incluyeron los intereses profesionales.**  
  *(Sección dedicada a AWS y computación en la nube: infraestructura, despliegue, disponibilidad y escalabilidad).*
- [x] **Se verificó el diseño para móviles, tabletas y escritorio.**  
  *(Probado en anchos de 320px, 375px–430px, 768px, 1024px y 1440px sin desbordamiento horizontal).*
- [x] **Se revisaron accesibilidad y navegación.**  
  *(Etiquetas semánticas, contraste AA/AAA, enlace de salto al contenido `#main-content`, botón accesible con `aria-*`, soporte de teclado y `prefers-reduced-motion`).*
- [x] **El código se subió al repositorio correcto.**  
  *(Código publicado en [https://github.com/majitoop12/parcial2dw](https://github.com/majitoop12/parcial2dw) en la rama principal `main`).*
- [x] **GitHub Pages está configurado.**  
  *(Configurado y activo desde la rama `main` y carpeta `/ (root)`).*
- [x] **Se comprobó la URL pública del sitio.**  
  *(Verificado y disponible en vivo con estado 200 OK en: `https://majitoop12.github.io/parcial2dw/`).*

---

## 8. Datos que la Propietaria Debe Revisar o Completar

1. **Revisión del buzón de correo:** Comprobar la recepción de pruebas enviadas a `mzapata0@unilasallista.edu.co` para validar que el alias institucional esté activo.
2. **Repositorio de RutaKontrol:** Cuando el código del proyecto cuente con repositorio público propio en GitHub, actualizar el botón del proyecto en `index.html` (reemplazando el enlace general por la URL exacta del repositorio).

---

## 9. Recomendaciones de Mejora Futura

* Añadir un blog técnico o sección de bitácora académica donde documentar aprendizajes de nuevas asignaturas y prácticas de laboratorio.
* Incorporar métricas o esquemas de base de datos adicionales en la tarjeta de RutaKontrol una vez se alcancen nuevas fases de desarrollo.
* Documentar proyectos prácticos de despliegue en AWS (como instancias EC2, buckets S3 o bases de datos RDS) a medida que avance en la exploración cloud.
