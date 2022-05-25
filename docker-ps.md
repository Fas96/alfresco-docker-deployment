# Docker Process

From previous post we ended at 
```java
### Naming Containers
Using docker assigns a random name when we do not specify a name. example is when we created nginx
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-random-name.png)

The way we give docker a name is by using --name [customName]
>docker run -p 8088:80 -p 8888:80 --name customNginx -d nginx:latest

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-custom-name-bash.png)
> docker ps

would display our custom name given
Docker containers naming makes it easy to identify our containers and easy to manage a container.
```

This section is a continuation of our docker instance.

Quite often the output of our
> docker ps

is really messy. so we want to make it well formatted. we use the docker ps formatter to format our output on the screen.
> docker ps --format=ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n

This formatting makes our docker ps output to be more clean. refer to the <a href="https://pastebin.com/XLJGkqhj">formatter</a>  <br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-ps-format-main.png)

<br>
Instead of calling the format string all the time we can export it as env variable so that we can call it anytime we want.

>export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"

> docker ps --format=$FORMAT

So if we call ps format always we can get a pretty output of our docker ps.
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-ps-env-variable.png) 
<br>

___
# Docker Volumes

Docker volumes allows us to share data.This could be files or folders.<br>
Between host and container<br>
Between containers<br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-volumes-explain.png)
<br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-volume-host-container.png)

<hr>
## Volume Between Host and Containers

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-volumes-host-container.png)

<br>

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-volume-user-container-dir.png)


from the current directory we want top create our website we can create content 
and match the content to the container specific directory.
<br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-run-with-volume.png)
<br>
This uploads our content into the docker container instance further changes to this local content
is reflected in the container(real-time).
<br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-volume-real-time-changes.png)

<br>
Like we specified in the volume we can check if the file is in the container directory.
<br>

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-check-volume-file.png)

<br>
Initially, when our docker volume was created it was read only( which implies we cannot create other file in that volume directory by command);

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-read-only-volume-directory.png)

<br>
The above indicates any command to create a file in the volume directory would not work.
When we recreate the container without read only volume then we can execute command to create other files in
the volume directory.

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-write-permission-volume-directory.png)
<br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-host-directory-copy-of-container-file.png)

<br>

## Copying Volumes of One Container into another
>  docker run -p 7777:80 --name fasWebsite-copy  --volumes-from fasWebsite  -d nginx:latest

We can create a new container by making a copy of existing volumes with the --volumes-from command
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-volume-from-exisiting-container.png)


<br>

A continuation would be how to create customized websites >>