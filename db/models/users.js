const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 3
     },
    email : {
        type : String,
        required : true,
        unique : [true, "email is already registered"],
        validate(value){
            if(!validator.isEmail()){
                throw new Error("Invalid Email");
            }
        }
    },
    mobile: {
        type : Number,
        required : true,
        unique : [true, "Mobile number is already registered"],
        minlength:10
      }})
      console.log(mongoose);
  export default mongoose.models.User || mongoose.model('User',userSchema);