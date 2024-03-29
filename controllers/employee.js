 const Employee = require("../models/employee.js")
// const { params } = require("../routes/employee.js")
 const create = async (req, res) => {
    try {
        const employeeData = new Employee(req.body)
        const {email} = employeeData
        const employeeExist = await Employee.findOne({email})

        if (employeeExist){
            return res.status(400).json({message: "Employee allresady exist"})
        }
        const employeeSave = await employeeData.save();
        res.status(200).json(employeeSave)
        
    } catch (error) {
        res.status(500).json({error: "internal server error"}) 

        
    }
 }
 
 
 
//  for getting all employee from database
 const get =async (req, res) => {
    try {
        const employees = await Employee.find()
        if(employees.length === 0){
            return res.status(404).json({message: "Employee not found"})
            
        }
        res.status(200).json(employees)
    } catch (error) {
       res.status(500).json({error: "internal server error"}) 
    }

}

// for updating employee data 
const update = async (req, res) => {
    try {
        const id =req.params.id
        const employeeExist = await Employee.findOne({_id:id})
        if(!employeeExist){
         return res.status(404).json({message: "Employee not Found"})
        }
        const updateEmployee = await Employee.findByIdAndUpdate(id, req.body, {new: true});
            res.status(201).json(updateEmployee)
    } catch (error) {
        res.status(500).json({error: "internal server error"})
        
    }

}

// for deleting employee 

const deleteEmployee = async (req, res) => {
    try {
        const id =req.params.id
        const employeeExist = await Employee.findOne({_id:id})
        if(!employeeExist){
         return res.status(404).json({message: "Employee not Found"})
        }

        await Employee.findByIdAndDelete(id)
        res.status(201).json({message: "Employee deleted Successfully."})
    } catch (error) {
        res.status(500).json({error: "internal server error"})
        
    }
}
module.exports = { get, create, update, deleteEmployee };
