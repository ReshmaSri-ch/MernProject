import React,{useState} from 'react';
import axios from 'axios';
function AddEmployee(){
    const [employeeData,setEmployeeData]=useState({
        EmployeeName:"",
        EmployeeID:"",
        Designation:"",
        Department:"",
        JoiningDate:""
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setEmployeeData({...employeeData,[name]:value});
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/add-employee",employeeData);
            alert("Employee added successfully");
        }catch(err){
            alert("Error adding employee");
        }
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="EmployeeName" placeholder="Employee Name" onChange={handleChange} required />
                <input type="text" name="EmployeeID" placeholder="Employee ID" onChange={handleChange} required />
                <input type="text" name="Designation" placeholder="Designation" onChange={handleChange} required />
                <input type="text" name="Department" placeholder="Department" onChange={handleChange} required />
                <input type="date" name="JoiningDate" placeholder="JoiningDate" onChange={handleChange} required />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}
export default AddEmployee;