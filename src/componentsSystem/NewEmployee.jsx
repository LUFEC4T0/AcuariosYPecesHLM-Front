import React, { useEffect, useState } from "react";
import axios from "axios";

function NewEmployee() {
    const token = localStorage.getItem('token')
    const [newEmployee, setNewEmployee] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        role:"",
        workPosition:""
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("/api/auth/register/employee", newEmployee, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            swal({
                text: res.data,
                icon: "success",
                button: "accept",
                timer: "2000"
            })
        })
        .catch(err => {
            console.log(err)
            swal({
                text: err.response.data,
                icon: "error",
                button: "accept",
                timer: "2000"

            })
        })
    }

    function handleInput(e) {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value });
    }
    
    return (
        
        <main className="mt-5 flex flex-col">
            <form onSubmit={handleSubmit} className="w-[50rem] self-center">
                <fieldset className="flex flex-col gap-5 text-white">
                    <label className="flex flex-col">Nombre
                        <input className="text-black pl-2" type="text" name="firstName" value={newEmployee.firstName} onInput={handleInput}/>
                    </label>
                    <label className="flex flex-col">Apellido
                        <input className="text-black pl-2" type="text" name="lastName" value={newEmployee.lastName} onInput={handleInput}/>
                    </label>
                    <label className="flex flex-col">Email
                        <input className="text-black pl-2" type="email" name="email" value={newEmployee.email} onInput={handleInput}/>
                    </label>
                    <label className="flex flex-col">Contraseña
                        <input className="text-black pl-2" type="text" name="password" value={newEmployee.password} onInput={handleInput}/>
                    </label>
                    <label className="flex flex-col">Rol
                        <input className="text-black pl-2" type="text" name="role" value={newEmployee.role} onInput={handleInput}/>
                    </label>
                    <label className="flex flex-col">Puesto
                        <input className="text-black pl-2" type="text" name="workPosition" value={newEmployee.workPosition} onInput={handleInput}/>
                    </label>
                </fieldset>
                <div className="flex justify-end">
                    <button className="m-5 py-2 px-3 border-2 border-whit2 bg-green-900 text-white" type="submit">Registrar</button>
                </div>
            </form>
            
        </main>
    )
}

export default NewEmployee; 