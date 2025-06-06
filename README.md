# Requisitos previos
 - node https://nodejs.org/es
 - docker desktop  o rancher o docker engine : https://rancherdesktop.io/,https://docs.docker.com/desktop/,](https://rancherdesktop.io/,https://docs.docker.com/desktop/,https://docs.docker.com/engine/install/
 - docker compose:  https://docs.docker.com/compose/install/linux/
  ########en caso de instalar rancher desktop , o docker desktop no  es necesario intalar docker compose 
# plantilla Node Express con keycloak

Este proyecto está basado en una [Plantilla de Proyecto de GitLab](https://docs.gitlab.com/ee/user/project/#create-a-project-from-a-built-in-template).
---

## Documentación de Docker Compose

El proyecto incluye un archivo `docker-compose.yml` para facilitar el despliegue de los servicios necesarios.

### Servicios incluidos

- **apidemo_formacion**: Servicio principal de la API Node Express.
    - Construido desde el `Dockerfile` del proyecto.
    - Expone el puerto `5002` (externo) mapeado al `5000` (interno).
    - Variables de entorno para integración con Keycloak:
        - `KEYCLOAK_URL`: URL del servidor Keycloak.
        - `KEYCLOAK_SECRET`: Secreto del cliente.
        - `KEYCLOAK_CLIENTNAME`: Nombre del cliente.
        - `KEYCLOAK_REALM`: Realm de autenticación.
    - Reinicio automático salvo detención manual.

- **keycloak_formacion**: Servicio de autenticación basado en Keycloak.
    - Imagen oficial de Keycloak.
    - Expone el puerto `8085` (externo) mapeado al `8080` (interno).
    - Variables de entorno para el usuario administrador:
        - `KEYCLOAK_ADMIN`: Usuario admin.
        - `KEYCLOAK_ADMIN_PASSWORD`: Contraseña admin.
    - Persiste los datos en el volumen `keycloak-data-formacion`.
    - Reinicio automático salvo detención manual.

### Volúmenes

- `keycloak-data-formacion`: Volumen persistente para los datos de Keycloak.

### Ejecución

Para levantar los servicios, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará tanto la API como el servidor de autenticación Keycloak.

---
