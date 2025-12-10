import React,{useState} from 'react';
import axios from 'axios';
function UpdateEmployee(){
    const [employeeID,setEmployeeID]=useState("");
    const [designation,setDesignation]=useState("");
    const handleUpdate=async()=>{
        try{
            await axios.put(`http://localhost:3001/update-employee/${employeeID}`,{Designation:designation});
            alert("Updated successfully");
        }catch(err){
            alert("Employee not found");
        }
    };
    return(
        <div>
            <input type="text" placeholder="Enter employee id" value={employeeID} onChange={(e)=>setEmployeeID(e.target.value)} />
            <input type="text" placeholder="Enter new designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} />
            <button onClick={handleUpdate}>Update Employee</button>
        </div>
    );
}
export default UpdateEmployee;