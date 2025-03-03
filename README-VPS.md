# Simulador de VPS Linux para Cámara de Comercio Magangué

Este proyecto proporciona una imagen Docker que simula un entorno VPS Linux para desplegar la aplicación Angular de la Cámara de Comercio de Magangué.

## Características

- Basado en Alpine Linux (ligero y seguro)
- Servidor web Nginx preconfigurado
- Herramientas de administración comunes preinstaladas
- Usuario no-root con permisos sudo
- Optimizado para aplicaciones Angular

## Requisitos previos

- Docker instalado en tu sistema
- Código fuente de la aplicación Angular

## Construcción de la imagen

Para construir la imagen Docker, ejecuta el siguiente comando desde la raíz del proyecto:

```bash
docker build -t ccmagangue-vps -f Dockerfile.vps .
```

## Ejecución del contenedor

Para ejecutar un contenedor basado en esta imagen:

```bash
docker run -d -p 80:80 --name ccmagangue-vps-container ccmagangue-vps
```

Esto iniciará el contenedor en segundo plano y mapeará el puerto 80 del contenedor al puerto 80 de tu máquina local.

## Acceso a la aplicación

Una vez que el contenedor esté en ejecución, puedes acceder a la aplicación Angular en tu navegador:

```
http://localhost
```

## Acceso al "VPS"

Para acceder al shell del contenedor (simulando el acceso SSH a un VPS):

```bash
docker exec -it ccmagangue-vps-container bash
```

Para cambiar al usuario no-root (recomendado para operaciones normales):

```bash
su - vpsuser
```

## Herramientas disponibles

El contenedor incluye las siguientes herramientas:

- bash: Shell avanzado
- curl: Transferencia de datos con URL
- vim: Editor de texto
- htop: Monitor de procesos interactivo
- procps: Utilidades del sistema
- net-tools: Herramientas de red (ifconfig, netstat, etc.)
- iputils: Herramientas IP (ping, etc.)
- openssh-client: Cliente SSH
- sudo: Ejecución de comandos con privilegios

## Configuración de Nginx

La configuración de Nginx se encuentra en `/etc/nginx/conf.d/default.conf`. Puedes modificarla según tus necesidades.

Para aplicar cambios en la configuración de Nginx:

```bash
sudo nginx -t          # Verificar la configuración
sudo nginx -s reload   # Recargar la configuración
```

## Logs

Los logs de Nginx se encuentran en:

- Acceso: `/var/log/nginx/access.log`
- Error: `/var/log/nginx/error.log`

Para ver los logs en tiempo real:

```bash
sudo tail -f /var/log/nginx/error.log
```

## Detener y eliminar el contenedor

Para detener el contenedor:

```bash
docker stop ccmagangue-vps-container
```

Para eliminar el contenedor:

```bash
docker rm ccmagangue-vps-container
```

## Notas de seguridad

Esta imagen está diseñada para simular un entorno VPS con fines de desarrollo y pruebas. Para un entorno de producción real, se recomienda:

1. Configurar certificados SSL
2. Implementar medidas de seguridad adicionales
3. Configurar copias de seguridad regulares
4. Utilizar un servicio de VPS real con soporte y monitoreo 