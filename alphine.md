# Alphine

ABOUT
Alpine Linux is an independent, non-commercial, general purpose Linux distribution designed 
for power users who appreciate security, simplicity and resource efficiency.
<br>
<hr>
SMALL
Alpine Linux is built around musl libc and busybox. 
<br>
<hr>
SIMPLE
Alpine Linux is a very simple distribution that will try to stay out of your way. <br>
<hr>
SECURE
Alpine Linux was designed with security in mind. All userland binaries are compiled as Position Independent Executables (PIE) with stack smashing protection.
<br>
<hr>
# Building Alpine Docker Images

## dangling images
we can delete dangling images from the docker images list if we have none displaying in our docker images list.
>docker rmi $(docker images -f "dangling=true" -q)

<br>

> ![](https://raw.githubusercontent.com/Fas96/T-images-repo/main/docker-dangling-images.png) 
<hr>

# tagging and versioning of docker images

Allows you to control image version
avoids breaking changes

if you run node:alpine and the current version of node is 8. when the node version changes . The application could have impacts on application
and could cause lots of changes.

# You have full control
if you specify the versions
node:8-alpine
or node:12-alpine

usually alphine is the best versions when building docker images. 

# Tagging override
