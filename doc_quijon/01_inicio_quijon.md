# Portal de Documentación - Wiki Windows Server

## 1. Identificación del Proyecto

- **Proyecto:** Wiki de Evidencia - Administración de Sistemas Operativos de Red
- **Estudiante:** Jonathan Andrés Quiroz Mondaca
- **Código Personal:** `quijon`
- **Institución:** INACAP Valparaíso
- **Asignatura:** T13V35 - Sistemas Operativos
- **Docente:** Rubén Schnettler Lucero

## 2. Objetivo de la Evaluación

El objetivo de este laboratorio es diseñar, desplegar y validar una infraestructura de red empresarial centralizada utilizando el sistema operativo Windows Server 2025. A través de este entorno virtualizado, se implementan servicios clave de directorio, direccionamiento y políticas de seguridad para simular el control operativo de una organización real.

## 3. Topología Logística del Laboratorio

El entorno aislado se compone de dos estaciones virtuales interconectadas mediante el hipervisor Oracle VirtualBox utilizando una Red Interna exclusiva configurada con el identificador exacto `redlab`.

### Controlador de Dominio (VM 1)

- **Nombre de Equipo:** `SRV-DC01`
- **Sistema Operativo:** Windows Server 2025 Standard (Experiencia de escritorio)
- **Dirección IP Fija:** `192.168.10.10`
- **Máscara de Subred:** `255.255.255.0`
- **Roles Activos:** Active Directory (AD DS), Servidor DNS, Servidor DHCP

### Estación de Trabajo Cliente (VM 2)

- **Nombre de Equipo:** `PC01`
- **Sistema Operativo:** Windows 10 Pro
- **Dirección IP:** Dinámica (Asignación automática por DHCP)
- **Dominio de Membresía:** `inacap.local`
