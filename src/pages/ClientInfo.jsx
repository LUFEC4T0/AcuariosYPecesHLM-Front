import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientInfo = () => {
    //Detector de token
    const token = localStorage.getItem('token');
    // Variable de estado con los datos del cliente
    const [clientData, setclientData] = useState();

    // Variable de estado para manejar la vista actual
    const [clientTab, setClientTab] = useState('personalData');

    // Variables de estado para la edición de datos
    const [editando, setEditando] = useState(false);
    const [datosEditados, setDatosEditados] = useState(clientData);

    // Función para cambiar la vista actual
    const changeTab = (clientab) => {
        setClientTab(clientab);
    };

    // Función para manejar el cambio de datos editados
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatosEditados({ ...datosEditados, [name]: value });
    };

    // Función para guardar los datos editados
    const handleGuardar = () => {
        setclientData(datosEditados);
        console.log(clientData)
        setEditando(false);
        axios.post("/api/current/editData",datosEditados,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response =>{
            alert("Data updated!")
        }).catch(error=>{
            alert.log("Something went wrong!")
        })
    };

    // AL INICIO OBTENER DATOS DE CLIENTE

    useEffect(() => {
        axios.get("/api/current/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const fetched = response.data;
            setclientData(fetched)
        })
        .catch(error => {
            console.error("There was a problem with the request:", error);
        });
    }, []);

    return (
        <div className="flex flex-row place-content-center place-items-center w-9/12 h-[500px] bg-slate-600 text-black text-center">
            <div className="w-2/4 flex flex-col">
                <button onClick={() => changeTab('personalData')}>Datos personales</button>
                <button onClick={() => changeTab('personalAdress')}>Dirección de Envío</button>
                <button onClick={() => changeTab('shopHistory')}>Historial de Compras</button>
            </div>
            <div className="w-2/4 flex flex-col">
                {clientData ? (
                    <div>
                        {clientTab === 'personalData' && (
                            <div>
                                <h2>Datos del Cliente</h2>
                                {editando ? (
                                    <div className='flex flex-col'>
                                        <label>
                                            Nombre:
                                            <input type="text" name="name" value={datosEditados.name} onChange={handleInputChange} />
                                        </label>
                                        <label>
                                            Apellido:
                                            <input type="text" name="lastName" value={datosEditados.lastName} onChange={handleInputChange} />
                                        </label>
                                        <label>
                                            Correo electrónico:
                                            <input type="email" name="email" value={datosEditados.email} onChange={handleInputChange} />
                                        </label>
                                        <label>
                                            Teléfono:
                                            <input type="tel" name="phone" value={datosEditados.phone} onChange={handleInputChange} />
                                        </label>
                                        <button onClick={handleGuardar}>Guardar</button>
                                    </div>
                                ) : (
                                    <div>
                                        <p><strong>Nombre:</strong> {clientData.name}</p>
                                        <p><strong>Apellido:</strong> {clientData.lastName}</p>
                                        <p><strong>Correo electrónico:</strong> {clientData.email}</p>
                                        <p><strong>Teléfono:</strong> {clientData.phone}</p>
                                        <p><strong>Adress:</strong> {clientData.adress}</p>
                                        <button onClick={() => { setDatosEditados(clientData); setEditando(true); }}>Editar</button>
                                    </div>
                                )}
                            </div>
                        )}
                    {clientTab === 'personalAdress' && (
                    <div>
                        <h2>Dirección de Envío</h2>
                        <p><strong>Adress:</strong> {clientData.adress}</p>
                    </div>
                )}
                    {clientTab === 'shopHistory' && (
                        <div>
                            <h2>Mis Compras</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Amount</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>500</td>
                                        <td>Oka</td>
                                        <td>18-03-1997</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    </div>
                ) : (<p>Error fetching data</p>)}
            </div>
        </div>
    );
/*
            <div className="w-2/4 flex flex-col">
                {clientInfo === 'personalData' && (
                    <div>
                        <h2>Datos del Cliente</h2>
                        {editando ? (
                            <div className='flex flex-col'>
                                <label>
                                    Nombre:
                                    <input type="text" name="nombre" value={datosEditados.name} onChange={handleInputChange} />
                                </label>
                                <label>
                                    Apellido:
                                    <input type="text" name="apellido" value={datosEditados.lastName} onChange={handleInputChange} />
                                </label>
                                <label>
                                    Correo electrónico:
                                    <input type="email" name="email" value={datosEditados.email} onChange={handleInputChange} />
                                </label>
                                <label>
                                    Teléfono:
                                    <input type="tel" name="telefono" value={datosEditados.phone} onChange={handleInputChange} />
                                </label>
                                <button onClick={handleGuardar}>Guardar</button>
                            </div>
                        ) : (
                            <div>
                                <p><strong>Nombre:</strong> {clientData.name}</p>
                                <p><strong>Apellido:</strong> {clientData.lastName}</p>
                                <p><strong>Correo electrónico:</strong> {clientData.email}</p>
                                <p><strong>Teléfono:</strong> {clientData.phone}</p>
                                <button onClick={() => { setDatosEditados(clientData); setEditando(true); }}>Editar</button>
                            </div>
                        )}
                    </div>
                )}
                {clientInfo === 'personalAdress' && (
                    <div>
                        <h2>Dirección de Envío</h2>
                    </div>
                )}
                {clientInfo === 'shopHistory' && (
                    <div>
                        <h2>Mis Compras</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>500</td>
                                    <td>Oka</td>
                                    <td>18-03-1997</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>):(<div>Error fetching data</div>)}
    );*/
};

export default ClientInfo;