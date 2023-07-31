---
sidebar_position: 1000
sidebar_label: Build Stages
title: Build Stages
tags:
  - Docker Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Docker Build Stages</h5></summary>

![Docker Build Stages](/img/interviews/docker/build-stages.png)

Building stages in Docker are a way to create images that use multiple base images and only keep the artifacts that are needed for the final image. Building stages can help reduce the size and complexity of your images by separating the build process into different steps.

A building stage is defined by a `FROM` instruction in the `Dockerfile`. Each `FROM` instruction starts a new stage of the build and can use a different base image. You can copy files or run commands in each stage, and then selectively copy artifacts from one stage to another. You can also name your stages using the `AS` keyword after the `FROM` instruction.

For example, here is a `Dockerfile` that uses two building stages to create an image with a Typescript app:

```dockerfile
# Build stage 1 -> for dev
FROM node:10.15.2
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN npm run build

# Build stage 2 -> for prop.
FROM node:10.15.2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /usr/src/app/build ./build # Copy the app binary from the first stage
EXPOSE 80
CMD npm start

```

or another example with Go app:

```dockerfile
# syntax=docker/dockerfile:1
# First stage: build the app
FROM golang:1.16 AS builder # named the stage
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY *.go ./
RUN CGO_ENABLED=0 go build -o app

# Second stage: copy the app and run it
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/app . # Copy the app binary from the `builder` stage
EXPOSE 8080
CMD [ "./app" ]
```

To build the image from this `Dockerfile`, you can use the same `docker build` command:

```bash
$ docker build -t go-app:builder --target builder .
```

- The `-t` option specifies the ***name and tag*** of the image, which in this case is `go-app:builder` 
- The `--target` option specifies the name of the build stage to stop at, which in this case is `builder`
- `.` in the command above means that you want to use the current directory as the build context for the docker build command

</details>
