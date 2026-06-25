# Bitácora de Uso de Inteligencia Artificial (Criterio Transversal)

## 1. Registro de Consultas y Flujo de Trabajo (Troubleshooting Visual)

Durante la fase avanzada del laboratorio, específicamente en el proceso de incorporación de la estación de trabajo cliente al dominio `inacap.local` (Paso 17), se experimentó un bloqueo técnico crítico. El sistema operativo cliente arrojaba de manera persistente una alerta de fallo indicando un error por tiempo de espera agotado (`ERROR_TIMEOUT`) en la resolución de los registros de ubicación de servicio SRV de Active Directory.

Para resolver el incidente, se utilizó la Inteligencia Artificial bajo el rol de **Agente de Diagnóstico Técnico**.

- **Prompt Inicial Introducido:** Se capturó directamente el estado de la consola CMD del cliente Windows 10 y se le adjuntó la imagen con la instrucción precisa:
  > _"esto arroja ipconfig /all"_
- **Análisis de Datos e Interpretación de la IA:** El asistente IA procesó la captura de la consola e identificó que la interfaz Ethernet del cliente había tomado de manera dinámica la IP `.50` del ámbito correcto, pero presentaba una anomalía severa en la línea de los **Servidores DNS**, mostrando la dirección IP `192.164.10.10`.
- **Identificación del Error de Origen (Efecto Dominó):** La IA determinó que este comportamiento venía arrastrado desde la etapa inicial del laboratorio (Paso 4), donde se había cometido un error de tipeo manual involuntario en el tercer octeto al configurar el servidor. Al crear posteriormente el ámbito DHCP, el servicio heredó ese dato erróneo (`192.164.10.10`), provocando que el cliente intentara buscar la base de datos de Active Directory en una dirección IP fantasma e inexistente en el segmento de red.

## 2. Corrección Aplicada y Justificación Técnica

Siguiendo las instrucciones de mitigación del agente, se ejecutaron los siguientes pasos en la infraestructura:

1. **Saneamiento en el DHCP (Servidor):** Se accedió a la consola DHCP en `SRV-DC01`, ingresando a las _Opciones de ámbito_ -> _006 Servidores DNS_. Se eliminó la IP errónea y se ingresó el direccionamiento real del servidor DNS corporativo: `192.168.10.10`.
2. **Renovación de Arrendamiento (Cliente):** En el Windows 10, se vació la caché de red y se solicitó un nuevo paquete de datos al DHCP ejecutando secuencialmente `ipconfig /release` y `ipconfig /renew`. Con esto, la consola validó el cambio reflejando el DNS correcto y permitiendo la unión al dominio de manera inmediata y fluida.

## 3. Reflexión Académica: Chatbot frente a Agente de Contexto

El desarrollo de laboratorios de infraestructura en un régimen de horario vespertino conlleva una fatiga cognitiva natural al final de la jornada laboral y académica; bajo este escenario, un error de un único dígito numérico en una máscara o segmento IP es sumamente fácil de pasar por alto.

Esta experiencia demuestra la gran diferencia operativa entre usar la IA como un simple _chatbot conceptual de navegación externa_ (al cual solo se le consulta teoría sobre comandos) frente a utilizarla como un _agente de contexto integrado_. Al proporcionarle la captura exacta de la terminal, la IA no teorizó sobre el error, sino que leyó los datos del entorno real, actuando como un par de ojos de auditoría capaces de aislar una falla de configuración imperceptible a simple vista. Esto optimizó el tiempo de resolución a menos de un minuto, evitando tener que reinstalar los servicios o rehacer el entorno virtual desde cero.
