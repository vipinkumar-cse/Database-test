

const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://vipinmongo:test@cluster0.g1aw0.mongodb.net/regusers?retryWrites=true&w=majority";
const connection = {}
async function dbConnect(){
  if(connection.isConnected){
    return ;
  }

const db = await mongoose.connect(MONGODB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,

})

connection.isConnected = db.connections[0].readyState;
console.log("hablo", connection.isConnected);


}

export default dbConnect;