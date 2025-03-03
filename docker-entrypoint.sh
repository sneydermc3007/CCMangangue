#!/bin/bash
set -e

# Mostrar información del sistema al iniciar
echo "========================================================"
echo "Simulador de VPS Linux para Cámara de Comercio Magangué"
echo "========================================================"
echo "Sistema: $(cat /etc/os-release | grep PRETTY_NAME | cut -d= -f2 | tr -d '"')"
echo "Kernel: $(uname -r)"
echo "Fecha: $(date)"
echo "========================================================"
echo "La aplicación Angular está disponible en http://localhost"
echo "Para acceder al contenedor: docker exec -it [nombre_contenedor] bash"
echo "Para cambiar al usuario vpsuser: su - vpsuser"
echo "========================================================"

# Primera ejecución como root
if [ "$1" = "nginx" ]; then
    echo "Iniciando Nginx..."
    exec nginx -g "daemon off;"
elif [ "$1" = "bash" ]; then
    echo "Iniciando shell..."
    exec bash
else
    echo "Ejecutando comando personalizado..."
    exec "$@"
fi 