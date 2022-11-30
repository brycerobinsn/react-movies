const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name:{type: String, required: true},
    password:{
        type: String, 
        trim: true,
        minlength: 3,
        required: true
    }
},{
    timestamps: true,
})