const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://126015018_db_user:resh123@cluster0.a1eamd4.mongodb.net/Employee?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("connected to mongodb"))
.catch(()=>console.log(err));
const employeeSchema=mongoose.Schema({
EmployeeName:String,
EmployeeID:{type:Number,unique:true},
Designation:String,
Department:String,
JoiningDate:Date
});
const Employee=mongoose.model('Employee',employeeSchema);
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.post('/add-employee',async(req,res)=>{
    const employeeData=req.body;
    try{
        const employee=new Employee(employeeData);
        await employee.save();
        res.status(200).send("Employee added successfully");
    }
    catch(err){
        res.status(400).send("error adding employee");
    }
});
app.get('/employees',async(req,res)=>{
    try{
        const employee=await Employee.find();
        if(employee){
            res.status(200).json(employee);
        }
    }catch(err){
        res.status(404).send("Employee not found");
    }
});
app.get('/search-employee/:EmployeeID',async(req,res)=>{
    try{
        const employee=await Employee.findOne({EmployeeID:req.params.EmployeeID});
        if(employee){
            res.status(200).json(employee);
        }
    }catch(err){
        res.status(404).send("Employee not found");
    }
});
app.put('/update-employee/:EmployeeID',async(req,res)=>{
    const {Designation}=req.body;
    try{
        const employee=await Employee.findOneAndUpdate({EmployeeID:req.params.EmployeeID},{Designation},{new:true});
        if(employee){
            res.status(200).send("Employee updated successfully");
        }
    }catch(err){
        res.status(404).send("Employee not found");
    }
});
const port=3001;
app.listen(port,()=>console.log("server connected to port 3001"));
