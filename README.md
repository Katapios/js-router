POST: http://localhost:6868/users   {"name":"username","password":123133424}

GET: http://localhost:6868/users
GET: http://localhost:6868/users?id='myuserid'

mongo admin-panel: http://localhost:8081/
user: admin
pass: admin

Using db terminal:
conect to docker container: docker exec -it http-server_mongodb_1 mongosh
switch to admin db: use admin
authenticate: db.auth("root", "123456")
show dbs

docker-compose up -d