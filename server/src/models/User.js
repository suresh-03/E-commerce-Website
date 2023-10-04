const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({


    firstname:{
        type:String,
        required:true,
        trim:true,
        min:6,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:6,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    contactNo:{type:String},
    profilePicture:{type:String}
},{timestamps:true}
);

// storing user given password as hashed password in database (signup)
// encryption
UserSchema.virtual("password").set(function(password){
    this.hash_password = bcrypt.hashSync(password,10);
});

UserSchema.virtual("fullname").get(function(){
    return `${this.firstname} ${this.lastname}`
})
 

// then comparing the given password is equal to the hash_password (signin)
// decryption
UserSchema.methods = {
    authenticate : function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}


module.exports = mongoose.model("User",UserSchema);