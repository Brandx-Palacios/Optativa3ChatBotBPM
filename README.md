# Optativa3ChatBotBPM

# Chatbot Web

# Descripción

# Este proyecto proporciona una solución de chatbot web interactivo, diseñado para ofrecer soporte y asistencia a los usuarios en una interfaz atractiva y moderna. El chatbot está integrado en una página web a través de un iframe y cuenta con animaciones y estilos personalizados para mejorar la experiencia del usuario.

# Estructura del Proyecto

# Archivos

# - index.html: El archivo principal que contiene la estructura HTML del chatbot.

# - styles.css: (Incorporado en el archivo HTML) Contiene los estilos CSS y animaciones para el diseño del chatbot.

# - script.js: (Incorporado en el archivo HTML) Contiene el JavaScript para manejar el estado de carga del iframe y mostrar u ocultar el spinner de carga.

# HTML

# El archivo HTML define la estructura del chatbot, incluyendo:

# <div class="chat-container">: Contenedor principal del chatbot.
# <div class="chat-header">: Encabezado del chatbot con un ícono y el título.
# <div class="chat-body">: Área principal donde se muestra el iframe del chatbot.
# <iframe id="chat-iframe">: Carga el chatbot desde una URL externa.
# <div class="loading" id="loading-spinner">: Spinner de carga que se muestra mientras el iframe se carga.

# CSS

# El archivo CSS define los estilos y animaciones, incluyendo:

# - Animación de Fondo: Cambia el fondo gradualmente con una animación de gradientes.
# - Animaciones de Transición: Incluye animaciones para la aparición del contenedor y el iframe, así como efectos de hover.
# - Loading Spinner: Animación de carga con efectos de rebote.

# JavaScript

# El archivo JavaScript (incorporado en el HTML) maneja:

# - Ocultamiento del Spinner: El spinner de carga se oculta cuando el iframe ha terminado de cargarse.
# - Manejo de Errores: (Opcional) Permite mostrar un mensaje de error si el iframe no se carga correctamente.

# Funcionalidades

# - Interfaz Interactiva: Ofrece una experiencia visualmente atractiva con un fondo animado y transiciones suaves.
# - Carga Dinámica: Muestra un spinner de carga mientras el iframe del chatbot se está cargando.
# - Efectos de Hover: Mejora la interactividad con efectos de hover sobre el contenedor del chatbot.

# Requisitos

# - Un navegador web moderno que soporte animaciones CSS y iframes.
# - Conexión a Internet para cargar el contenido del iframe del chatbot.