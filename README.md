[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# User Manager on VM

This repository contains a simple demo API built with NodeJS.
The API is used to manage users in a MongoDB database. This repository has been modified to run on a VM preferrably in a docker container.

It is expedient you create a .env file to run this application successfully. Enter the content below in your env file.


`PORT=3000

 DB_URL='mongodb://localhost:27017/databaseName`

### Installation
* Clone the repository
* Download and Install Docker for your type of operating system at https://docs.docker.com/engine/installation
* Open the Docker Quickstart terminal, it will automatically create a docker machine called "default"
* In the terminal, navigate to the folder that housed the nodejs application; `../UserManager`
* Run `docker-compose build` to build the nodejs applicaiton and the mongoDB containers.
* Upon successful build, run the command `docker image ls`, the terminal will display the images for the nodejs app and mongoDB
* To run the node js app, enter the command `docker run -p 49160:3000 -d usermanager_app` in the terminal.
* To check if the mongo image is working , enter the command `docker run -p 49161:3000 -d mongo` in the terminal.
* Enter the command `docker ps` to display information about the images. Take note of the container id.
* To see the output of the nodejs application, enter the command `docker logs <usermanager_container_id>`. You should see `LISTENING TO PORT 3000`.
* `docker logs mongo_container_id>`.If entered correctly, you will see `WAITING FOR CONNECTIONS ON PORT 27017`.
* To run the two services simultaenously, type on the terminal, the command, `docker-compose up`. Then we have the two services running on a VM.


### API Documentation
The API only has one endpoint which is the `/users` endpoint for saving users to the database. The endpoint works with the HTTP verbs: `POST`, `GET`, `PUT`, `DELETE`.

###### POST HTTP Request
-   `POST` /users
-   INPUT:
```x-form-url-encoded
name: John Doe
email: john.doe@gmail.com
password: johndoe
```

###### HTTP Response

-   HTTP Status: `201: created`
-   JSON data
```json
{
  "_id": "59071791b0lkscm2325794",
  "name": "John Doe",
  "email": "john.doe@gmail.com",
  "password": "johndoe",
  "__v": 0
}
```

###### GET HTTP Response
-   `GET` /users

```json
[
    {
        "_id": "59071791b0lkscm2325794",
        "name": "John Doe",
        "email": "john.doe@gmail.com",
        "password": "johndoe",
        "__v": 0
    }
]
```

###### GET HTTP Response
-   `GET` /users/:id

```json
{
    "_id": "59071791b0lkscm2325794",
    "name": "John Doe",
    "email": "john.doe@gmail.com",
    "password": "johndoe",
    "__v": 0
}
```

###### DELETE HTTP Response
-   `DELETE` /users/:id

```json
User John Doe was deleted
```

###### POST HTTP Request
-   `PUT` /users/:id
-   INPUT:
```x-form-url-encoded
name: Jane Doe
email: jane.doe@gmail.com
password: janedoe
```

###### HTTP Response

-   HTTP Status: `200: OK`
-   JSON data
```json
{
  "_id": "59071791b0lkscm2325794",
  "name": "Jane Doe",
  "email": "jane.doe@gmail.com",
  "password": "janedoe",
  "__v": 0
}
```



### Original Author
**Olajide Bolaji 'Nuel** - Software Developer at Andela

### Modified by
**Tosin Jemilehin**
