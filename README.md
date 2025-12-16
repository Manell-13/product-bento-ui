# 🪑 Product Bento UI – NovaErgo Chair

Una **interfaz de producto tipo Bento Grid**, moderna y elegante, diseñada para mostrar una **silla ergonómica premium** con selector de color y ángulo interactivo.  
El diseño combina **glassmorphism**, layout modular y una experiencia visual cuidada, inspirada en páginas de producto de marcas tecnológicas y e-commerce premium.

Construido con **HTML, CSS y JavaScript Vanilla**, priorizando claridad, estructura y escalabilidad.

---

## 🔗 Live Demo
https://product-bento-ui.vercel.app/

---

## 🎨 Preview
> *La siguiente imagen es solo una vista parcial del diseño. Puedes interactuar con el producto completo en la demo.*

<img width="1170" height="991" alt="product-bento-ui" src="https://github.com/user-attachments/assets/13e15d5d-68cf-4ce9-8378-8ae2ba94569b" />

---

## ✨ Características

- **Bento Grid Layout** inspirado en UI modernas  
- **Diseño responsive** (Desktop, Tablet y Mobile)  
- **Selector de color interactivo**  
- **Cambio de ángulo del producto** (prev / next)  
- **Gestión de estado en JavaScript** (color + ángulo)  
- **Efecto glassmorphism** con blur y transparencias  
- **Hover effects suaves** en cards y botones  
- **Imágenes optimizadas con fondo eliminado**  
- Código **limpio, organizado y comentado**

---

## 🛠️ Stack Tecnológico

- **HTML5**
  - Estructura semántica
- **CSS3**
  - CSS Grid (Bento layout)
  - Flexbox
  - Media Queries
  - Glassmorphism
- **JavaScript (Vanilla)**
  - Manipulación del DOM
  - Gestión de estado
  - Eventos y actualización dinámica de UI
- **Remix Icons**
- **Google Fonts — Inter**

---

## 🧠 Lógica principal (JavaScript)

- Estado centralizado:
  - `currentColor`
  - `currentAngle`
- Cambio dinámico de imagen según:
  - Color seleccionado
  - Ángulo activo
- Navegación circular de imágenes:
  - Al llegar al último ángulo, vuelve al primero
- Separación clara entre:
  - **Eventos**
  - **Estado**
  - **Funciones de UI**

---

## 📁 Estructura del Proyecto

```bash
📦 product-bento-ui
├── index.html
├── style.css
├── app.js
└── img/
    ├── accessories/
    │   ├── ergo_system.png
    │   ├── novaErgo_armrest_pro.png
    │   └── novaergo_footrest.png
    ├── novaergo/
    │   ├── NovaErgo_1_black_nbg.png
    │   ├── NovaErgo_1_blue_nbg.png
    │   ├── NovaErgo_1_green_nbg.png
    │   ├── NovaErgo_2_black_nbg.png
    │   ├── NovaErgo_2_blue_nbg.png
    │   ├── NovaErgo_2_green_nbg.png
    │   ├── NovaErgo_3_black_nbg.png
    │   ├── NovaErgo_3_blue_nbg.png
    │   └── NovaErgo_3_green_nbg.png
    └── reviews-nbg.png
```

---


## 📱 Responsive Design

- **Desktop**
  - Bento Grid completo
  - Hero con imagen y controles laterales
- **Tablet**
  - Grid simplificado
  - Hero apilado verticalmente
- **Mobile**
  - Cards una debajo de otra
  - Imagen protagonista centrada
  - Controles accesibles y claros

---

## 🚧 Futuras mejoras

- Animaciones suaves al cambiar color/ángulo  
- Indicador visual del ángulo activo  
- Transiciones con `opacity` + `transform`  
- Versión React / Next.js  
- Integración con carrito o backend ficticio  
- Dark mode  

---

## 📄 Licencia

Este proyecto es libre para **uso educativo y portfolio personal**.

---

## 🙌 Autor

**Manuel Jiménez**  
💻 Frontend / Full-Stack Developer  
🔗 GitHub: [@Manell-13](https://github.com/Manell-13)
