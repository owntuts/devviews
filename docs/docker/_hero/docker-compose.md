---
sidebar_position: 1000
sidebar_label: docker-compose
title: docker-compose
tags:
  - Docker Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>docker-compose declaration</h5></summary>

1. **Compose file version**

`version`: Specifies the version of the Compose file syntax being used. It determines which Compose features are available to the file.

```yaml
version: "3.9"
```

2. **Services**

`services`: Defines the services that make up your application. Each service is a container that runs the image defined by the build or image field.

```yaml
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
```

3. **Service Configuration**

- `build`: Specifies the path to the Dockerfile for building a Docker image.
- `image`: Specifies the name of an existing image to use instead of building an image from a Dockerfile.
- `container_name`: Specifies a custom name for the container.
- `command`: Overrides the default command specified by the image.
- `environment`: Defines environment variables to set inside the container.
- `ports`: Exposes a port or a range of ports on the host.
- `volumes`: Mounts a directory or file from the host inside the container.
- `networks`: Connects the service to a pre-existing network.
- `depends_on`: Specifies the dependent services in the order they should be started.

```yaml
services:
  web:
    build: .
    container_name: my_container
    command: python app.py
    environment:
      - ENV_VAR=value
    ports:
      - "5000:5000"
    volumes:
      - .:/code
    networks:
      - my_network
    depends_on:
      - db
  db:
    image: postgres
```

4. **Networks**

`networks`: Defines the networks to be created.

```yaml
networks:
  my_network:
```

5. **Network Configuration**

- `driver`: Specifies the network driver to use.
- `ipam`: Configures the IP Address Management driver for the network.
- `subnet`: Specifies the subnet for the network.
- `gateway`: Specifies the gateway for the network.

```yaml
networks:
  my_network:
    driver: bridge # A bridge network is the default network driver for Docker, and it allows your containers to communicate with each other and with the host machin
    ipam:
      driver: default #  The default IPAM driver assigns IP addresses to your containers automatically from a predefined pool
      config:
        - subnet: 172.28.0.0/16
          gateway: 172.28.5.254
```

6. **Volumes**

`volumes`: Defines the volumes to be created.

```yaml
volumes:
  my_volume:
```

7. **Volume Configuration**

- `driver`: Specifies the volume driver to use. (Volumes can also use different drivers and options to store data on remote hosts, cloud providers, or encrypt the contents of volumes.)
- `driver_opts`: Specifies the options for the volume driver.
- `external`: Specifies whether the volume should be created on the host or in a plugin managed volume.
- `name`: Specifies the name of an existing volume to use.

```yaml
volumes:
  my_volume:
    driver: local # The local driver stores volumes on the host machine where the containers run
    driver_opts:
      type: "nfs4" # the type of the volume, which is nfs4. This means that your volume will use the NFSv4 protocol to access a shared file system on a remote server
      o: "addr=192.168.1.100,nfsvers=4,rw" #  your volume will connect to the server with IP address 192.168.1.100, use NFS version 4, and mount the volume as read-write
      device: ":/myshare" # your volume will access the directory /myshare on the remote server
    external: true # volume is external, which means that it has been created outside of Compose using docker volume create or another tool
```

8. **Secrets**

`secrets`: Defines the secrets to be created.

```yaml
services:
  app:
    image: example-app:latest
    secrets: # specify the secrets that the app service should receive
      - db_password # mount the db_password secret below to /run/secrets/db_password
      - source: api_key # use the api_key secret blow as the source
        target: app_api_key # mount the api_key secret to /run/secrets/app_api_key

secrets: # define the secrets that are used in the services
  db_password: # name of the secret
    file: ./db_password.txt # file path where the secret value is stored on the host machine
  api_key: # name of the secret
    external: true # indicate that the secret is created outside of Compose using docker secret create or another tool
```

9. **Configurations**

- `configs`: Defines the configurations to be created.
- `file`: Specifies the path to the file to use as the configuration.

```yaml
services:
  web:
    image: nginx
    ports:
      - "80:80"
    configs: # specify the configs that the web service should receive
      - source: nginx_config # use the nginx_config config as the source
        target: /etc/nginx/nginx.conf # mount the config to /etc/nginx/nginx.conf within the container

  app:
    image: node
    configs: # specify the configs that the app service should receive
      - source: app_config # use the app_config config as the source
        target: /app/config.json # mount the config to /app/config.json within the container

configs:
  nginx_config: # name of the config
    file: ./nginx.conf # file path where the config value is stored on the host machine
  app_config: # name of the config
    external: true # indicate that the config is already created outside of Compose using `docker config create` or another tool
```

10. **services_order**

- `services_order`: Specifies the order in which services should be started.

```yaml
services_order: [web, db]
```
</details>
