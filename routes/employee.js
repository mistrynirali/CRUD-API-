const express = require('express');
const route = express.Router();
const { get, create, update,deleteEmployee } = require('../controllers/employee');


route.get("/getallemployee", get);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteEmployee)


module.exports = route

// bM4ngAHjTDkM3VEc