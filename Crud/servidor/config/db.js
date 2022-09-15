const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});
const conectarDB = async () => {


/*
Mongoose.connect(
    MONGODB_URL,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)
If you still want to use Options then Just downgrade your Mongoose below the 6.0 version because in Mongoose 6.0 useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options
*/
    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        })
        console.log('DB connected...👻');

    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB