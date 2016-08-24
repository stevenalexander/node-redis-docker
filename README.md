# node-redis-docker

Simple containerised Node JS Express application connected to Redis

Notes

* Generated skeleton express site via express generator `npm install express-generator -g`
* Installed nodemon to reload on changes `npm install -g nodemon`
* Run site with nodemon `DEBUG=app:* nodemon ./bin/www` or normally `DEBUG=app:* npm start`
* Install node redis client with `npm install redis --save`
* Installed Standard, globally `npm install standard -g` and locally `npm install standard --save-dev` for linting and added test script task
* Run redis container with `docker run --rm  --name some-redis -p 6379:6379 redis redis-server --appendonly yes`