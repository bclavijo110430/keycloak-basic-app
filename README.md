# Keycloak Basic App

## Descripción

Este proyecto es una plantilla Node Express que integra autenticación con Keycloak, ideal para proyectos que requieren gestión de usuarios y control de acceso robusto.

## Requisitos previos

- [Node.js](https://nodejs.org/es)
- Docker Desktop, Rancher Desktop o Docker Engine ([Rancher](https://rancherdesktop.io/), [Docker Desktop](https://docs.docker.com/desktop), [Docker Engine](https://docs.docker.com/engine/install/))
- [Docker Compose](https://docs.docker.com/compose/install/linux/)  
  > **Nota:** Si usas Rancher Desktop o Docker Desktop, no es necesario instalar Docker Compose por separado.

## Servicios incluidos

### apidemo_formacion
- Servicio principal de la API Node Express.
- Construido desde el `Dockerfile` del proyecto.
- Expone el puerto externo `5002` mapeado al interno `5000`.
- Variables de entorno principales:
  - `KEYCLOAK_URL`: URL del servidor Keycloak.
  - `KEYCLOAK_SECRET`: Secreto del cliente.
  - `KEYCLOAK_CLIENTNAME`: Nombre del cliente.
  - `KEYCLOAK_REALM`: Realm de autenticación.
- Reinicio automático salvo detención manual.

### keycloak_formacion
- Servicio de autenticación basado en Keycloak.
- Usa la imagen oficial de Keycloak.
- Expone el puerto externo `8085` mapeado al interno `8080`.
- Variables de entorno para el usuario administrador:
  - `KEYCLOAK_ADMIN`: Usuario admin.
  - `KEYCLOAK_ADMIN_PASSWORD`: Contraseña admin.
- Persiste datos en el volumen `keycloak-data-formacion`.
- Reinicio automático salvo detención manual.

### Volúmenes
- `keycloak-data-formacion`: Volumen persistente para los datos de Keycloak.

## Ejecución

Para levantar los servicios, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará tanto la API como el servidor de autenticación Keycloak.

## Uso

1. Accede a la API en `http://localhost:5002`.
2. Accede a la consola de Keycloak en `http://localhost:8085`.

## Personalización

- Modifica las variables de entorno en el archivo `docker-compose.yml` según tus necesidades.
- Agrega tus rutas y lógica en el código de la API Express.

## Créditos

Basado en una [Plantilla de Proyecto de GitLab](https://docs.gitlab.com/ee/user/project/#create-a-project-from-a-built-in-template).

---

¿Quieres que genere la actualización en tu repositorio, o deseas personalizar alguna sección antes de continuar?
