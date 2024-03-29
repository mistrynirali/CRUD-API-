const mongoose = require('mongoose'); 

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true  
    },
    salary: {
        type: Number,
        require: true
    },
    department: {
       type: String,
       require: true
    }

})
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;