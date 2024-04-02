import React, {useState} from "react";
import axios from "axios";

function NewClientStore() {
    const [clientStore, setClientStore] = useState({name: "", lastName: "", phone: "", rut: "", adress: ""})
    const token = localStorage.getItem('token')

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("/api/auth/register/clientStore", clientStore, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    function handleInput(e) {
        setClientStore({...clientStore, [e.target.name]: e.target.value });
    }

    return (
        <main className="m-5">
            <h1 className="font-bold text-white text-xl underline text-center mb-5">Agregar un nuevo cliente</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="flex flex-col gap-5 text-white">
                    <label className="flex flex-col">Nombre
                        <input className="text-black pl-2" type="text" name="name" value={clientStore.name} onInput={handleInput}  />
                    </label>
                    <label className="flex flex-col">Apellido
                        <input className="text-black pl-2" type="text" name="lastName" value={clientStore.lastName} onInput={handleInput} />
                    </label>
                    <label className="flex flex-col">Celular
                        <input className="text-black pl-2" type="text" name="phone" value={clientStore.phone} onInput={handleInput} />
                    </label>
                    <label className="flex flex-col">RUT
                        <input className="text-black pl-2" type="text" name="rut" value={clientStore.rut} onInput={handleInput} />
                    </label>
                    <label className="flex flex-col">Dirección
                        <input className="text-black pl-2" type="text" name="adress" value={clientStore.adress} onInput={handleInput} />
                    </label>
                </fieldset>
                <button className="m-5 py-2 px-3 border-2 border-green-900 text-white font-bold" type="submit">Registrar</button>
            </form>
        </main>
    )
}

export default NewClientStore;