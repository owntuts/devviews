---
sidebar_position: 1000
sidebar_label: Dockerfile-commands
title: Dockerfile-commands
tags:
  - Docker Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Dockerfile-commands</h5></summary>

#### Commands for building images:

- `FROM`: Specifies the base image for the subsequent instructions.
- `RUN`: Runs a command inside the container to install packages, configure services or applications, etc.
- `ARG`: Defines an argument to be used in `Dockerfile`.
- `WORKDIR`: Sets the working directory for future instructions.
- `COPY` or `ADD`: Copies a file or directory from the host machine to the container.

```yaml
# Use the official node image as the base image
FROM node:14

# Define an argument called NODE_ENV with a default value of production
ARG NODE_ENV=production

# Set the environment variable NODE_ENV to the value of the argument NODE_ENV
ENV NODE_ENV $NODE_ENV

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files from the host to the working directory
COPY package*.json ./

# Run the npm install command to install dependencies
RUN npm install

# Copy the rest of the files from the host to the working directory
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Run the npm start command to start the app
CMD [ "npm", "start" ]
```

#### Commands for configuring images:

- `EXPOSE`: Declares what port(s) should be exposed by the container.

```dockerfile
# To expose port 80 of the container
EXPOSE 80
```

- `ENV`: Set environment variable inside the container.

```dockerfile
# To set the working directory as an environment variable
ENV workdirectory /usr/node
```

- `LABEL`: Provides metadata to an image.

```dockerfile
# To add some labels to the image
LABEL "author"="FOSS TechNIx"
LABEL "Date"="2020-09-29"
```

- `USER`: Specifies the user or UID to use when running the image.

```dockerfile
# To run the image as user ubuntu
USER ubuntu
```

- `ENTRYPOINT`: Specifies the command to be run when the container starts.

```dockerfile
# To run a python script as the entrypoint
ENTRYPOINT ["python", "app.py"]
```

- `CMD`: Specifies the arguments to be passed to the entrypoint command.

```dockerfile
# To pass some arguments to the python script
CMD ["--port", "8080"]
```

#### Miscellaneous commands

- `LABEL`: Provides metadata to an image.

```yaml
# To add some labels to the image
LABEL "author"="FOSS TechNIx"
LABEL "Date"="2020-09-29"
```

- `ONBUILD`: Specifies a command to execute when the image is used as a base image.

```yaml
# To run a command when another image is built on top of this image
ONBUILD RUN npm install
```

#### The order of execution

Here's a list of Dockerfile commands in the order they are typically executed:

- `FROM`
- `ARG`
- `RUN`
- `COPY` or `ADD`
- `WORKDIR`
- `RUN`
- `EXPOSE`
- `ENV`
- `LABEL`
- `USER`
- `ENTRYPOINT`
- `CMD`
- `ONBUILD`

</details>
