
const mongoose = require('mongoose');

function makeNewConnection(uri) {
    const db = mongoose.createConnection(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    db.on('error', function (error) {
        console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });

    db.on('connected', function () {
        mongoose.set('debug', function (col, method, query, doc) {
            console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
        });
        console.log(`MongoDB :: connected ${this.name}`);
    });

    db.on('disconnected', function () {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });

    return db;
}

const sourceConnection = makeNewConnection("mongodb://yepdesk:G0dz1lla101@yepdesk-dev-shard-00-00.tpzqs.mongodb.net:27017,yepdesk-dev-shard-00-01.tpzqs.mongodb.net:27017,yepdesk-dev-shard-00-02.tpzqs.mongodb.net:27017/yepdesk-test?ssl=true&replicaSet=atlas-d40xfs-shard-0&authSource=admin&retryWrites=true&w=majority");
const clientConnection = makeNewConnection("mongodb+srv://dbUser:Alex%40199525@cluster0.1hdlu.mongodb.net/clientDataBase?retryWrites=true&w=majority");

module.exports = {
   sourceConnection,
   clientConnection,
};






//mydb
 //const URI = "mongodb+srv://dbUser:Alex%40199525@cluster0.1hdlu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 //625 db
 //var URI = "mongodb://yepdesk:G0dz1lla101@yepdesk-dev-shard-00-00.tpzqs.mongodb.net:27017,yepdesk-dev-shard-00-01.tpzqs.mongodb.net:27017,yepdesk-dev-shard-00-02.tpzqs.mongodb.net:27017/yepdesk-test?ssl=true&replicaSet=atlas-d40xfs-shard-0&authSource=admin&retryWrites=true&w=majority"


    // mongoose.createConnection(URI, {useNewUrlParser: true});
    // const con = mongoose.connection

    // con.on('open', ()=>{
    //     console.log("database has been connected");
    // })
