const PORT = process.env.PORT || 5300;
const Application = require('./app/framework/Application');
const userRouter = require('./app/routes/user-router');
const jsonParser = require('./app/framework/parseJson');
const parseUrl = require('./app/framework/parseUrl');
const mongoose = require('mongoose');
const dbConfig = require('./app/config/db.config');

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);



const start = async () => {
    try {
        await mongoose.connect(`mongodb://root:123456@localhost:7017/katapios_db?authSource=admin`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();








