const PORT = process.env.NODE_DOCKER_PORT || 6868;

//const PORT = process.env.PORT || 8080;

const Application = require('./app/framework/Application');
const userRouter = require('./app/routes/user-router');
const jsonParser = require('./app/framework/parseJson');
const parseUrl = require('./app/framework/parseUrl');
const mongoose = require('mongoose');
const dbConfig = require('./app/config/db.config');


console.log(dbConfig.url);

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:6868'));
app.addRouter(userRouter);



const start = async () => {
    try {
        await mongoose.connect(dbConfig.url);
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();









