---
sidebar_position: 1000
sidebar_label: RUN vs CMD vs ENTRYPOINT
title: RUN vs CMD vs ENTRYPOINT
tags:
  - Docker Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>RUN vs CMD vs ENTRYPOINT</h5></summary>

Here is a brief summary of the difference between RUN, CMD and ENTRYPOINT commands in a dockerfile:

- `RUN`: Executes a command and saves the result as a new layer in the image. It is usually used to install packages or run build steps (***within Docker Image Building Stages*** - when Image is being created from Dockerfile). For example:

```dockerfile
# To install curl in the image
RUN apt-get update && apt-get install -y curl
```

- `CMD`: Specifies the default command to ***run when a container is created*** from the image. It can be overridden by passing a different command to the docker run command. For example:

```dockerfile
# To run a python script as the default command
CMD ["python", "app.py"]
```

- `ENTRYPOINT`: Specifies the executable that will ***run when the container is started*** (when bash shell of container is provided). It allows the ***container to be run as if it was a binary***. It can be combined with CMD to provide default arguments that can be overridden. For example:

```dockerfile
# To run a python script as the entrypoint
ENTRYPOINT ["python"]
# To provide a default argument to the entrypoint
CMD ["app.py"]
```

</details>
