# Wiki Windows Server - quijon

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Windows Server](https://img.shields.io/badge/Windows_Server-0078D6?style=for-the-badge&logo=windows&logoColor=white)

Plataforma web interactiva desarrollada para documentar el despliegue, configuración y administración de una infraestructura de red centralizada corporativa basada en **Windows Server 2025**.

Este proyecto es la evidencia técnica correspondiente a la Evaluación 2 de la asignatura **Sistemas Operativos (T13V35)** en INACAP Valparaíso.

## Enlace de Producción

** Sitio web desplegado en Vercel:** [https://wiki-quijon.vercel.app](https://wiki-quijon.vercel.app) _(Nota: asegúrate de que este enlace sea el correcto de tu despliegue)_

## Sobre el Proyecto

El laboratorio documentado en esta wiki abarca la implementación de un entorno de red virtualizado completo e independiente (`redlab`), estructurado en los siguientes hitos técnicos:

- **Instalación Base:** Despliegue de Windows Server 2025 Standard, direccionamiento estático y seguridad.
- **Active Directory:** Promoción a Controlador de Dominio (`inacap.local`), creación de Unidades Organizativas (OU), usuarios corporativos y grupos de seguridad.
- **Cliente Windows 10:** Incorporación de estaciones de trabajo al dominio centralizado y validación de autenticación.
- **Servicios de Red:** Configuración e integración de resolución de nombres (DNS) y enrutamiento dinámico (DHCP).
- **Políticas de Grupo (GPO):** Centralización de seguridad bloqueando configuraciones críticas de usuario y despliegue masivo de marca (Wallpaper Institucional).

## Tecnologías y Herramientas

- **Infraestructura:** Oracle VirtualBox, Windows Server 2025, Windows 10 Pro.
- **Frontend:** React.js con Vite.
- **Estilos:** Tailwind CSS (Estética Cyber/Dark Tech con Glassmorphism).
- **Iconografía:** Lucide React.
- **Despliegue:** Git, GitHub & Vercel.

## Estructura del Repositorio

La evidencia en bruto (archivos Markdown y capturas) y el código fuente están separados lógicamente:

```text
wiki_quijon/
├── doc_quijon/           # Fuente de verdad: Archivos .md con el respaldo de cada criterio
│   └── img_quijon/       # Capturas de pantalla originales del laboratorio
├── public/
│   └── img_quijon/       # Recursos gráficos servidos para la aplicación React
├── src/
│   ├── components/       # Componentes modulares de React (Instalacion, AD, GPO, etc.)
│   ├── App.jsx           # Layout principal, enrutamiento de estados y menú lateral
│   └── index.css         # Importación de directivas de Tailwind
└── package.json

```
