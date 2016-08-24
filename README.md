# node-redis-docker

Simple containerised Node JS Express application connected to Redis.

## Requirements

* docker (with docker-compose)

## Run

Will build the node-app container, then startup the node app and redis containers linked together.

```
docker-compose up
```

Notes

* Generated skeleton express site via express generator `npm install express-generator -g`
* Installed nodemon to reload on changes `npm install -g nodemon`
* Run site with nodemon `DEBUG=app:* nodemon ./bin/www` or normally `DEBUG=app:* npm start`
* Install node redis client with `npm install redis --save`
* Installed Standard, globally `npm install standard -g` and locally `npm install standard --save-dev` for linting and added test script task
* Run containers manually
  * redis container with `docker run --rm  --name redis redis redis-server --appendonly yes` (does not expose ports)
  * node app in container `docker run -it --rm --name node-app --link redis:redis -p 3000:3000 -v "$PWD/app":/usr/src/app -w /usr/src/app node:4 node bin/www`
* Created docker-compose.yml and Dockerfile for node app


