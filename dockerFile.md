# Dockerfile
```css
This is a continuation from docker processes and docker volumes
```

Build own images
This allows us to build our own images.
<br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/customdockerFIlesImage.png)

<br>
The most common commands used in Dockerfiles is shown in the image below

![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/dockerFIleBasicCommands.png)

<br>
All single command to build a Dockerfile can be found on this page
<a href="https://docs.docker.com/engine/reference/builder/#from">Docker file reference</a>
<br>
We month volume into the container.We are able to view the website before.
When we build custom image <bold> we dont need to mount volumes</bold>.But
we need to copy files into the image.
What we want to do is run custom image and run container from it.

<h1>Docker Image</h1>

- Image is a template for creating an environment of your choice
- Snapshot
- Has everything need to run your apps
- OS, software, app code

## FROM 
The name of the base image that we want to use<br>
in our case we want to use the nginx:latest base image

## ADD
We want to copy content from the directory into the destination of our container

Now we have a dockerfile we now need to produce an image from this docker file
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-file-no-image-built-yet.png)<br>
# Building a Docker Image 
The way an image is built by running this command.
we must specify the docker image name ,tags, and the location of the docker file
> docker build --tag fassitecusimage:latest .

we have successfully built our docker image from the docker file.
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-build-image-from-docker-file.png)<br>

we can check our newly created image from the docker image list
> docker image ls
<br>
![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-checking-our-built-image.png)<br>
# We can build a container with this image


