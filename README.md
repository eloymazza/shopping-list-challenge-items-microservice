# Shopping List Microservice

Shopping List CRUD microservice.

## Installation

### Requisites

Have installed node 18.\* version or latest.

## Steps

After cloning the repository, run the following command for run the following commands depending your necessities.

First of all, run `npm install` for download the dependencies.

`npm run dev` - in order to run the server in a development environment.

`npm run production`- n order to run the server in a production environment.

## Dockerization

For run this app as a docker container, ensure you have docker installed and run the following commands:

`docker build -t 'shopping-list:v1.0' .`

and then

`docker run -p 3000:3000 shopping-list:v1.0`

Or simply run:

`npm run docker:build`

and then

`npm run docker:run`
