import React, { useState } from 'react';

const ClientInfo = () => {
    // Variable de estado con los datos del cliente
    const [datosCliente, setDatosCliente] = useState({
        nombre: 'Nombre del Cliente',
        apellido: 'Apellido del cliente',
        email: 'correo@ejemplo.com',
        telefono: '123456789'
    });

    // Variable de estado para manejar la vista actual
    const [clientInfo, setClientInfo] = useState('personalData');

    // Variables de estado para la edición de datos
    const [editando, setEditando] = useState(false);
    const [datosEditados, setDatosEditados] = useState(datosCliente);

    // Función para cambiar la vista actual
    const changeTab = (clientinfo) => {
        setClientInfo(clientinfo);
    };

    // Función para manejar el cambio de datos editados
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatosEditados({ ...datosEditados, [name]: value });
    };

    // Función para guardar los datos editados
    const handleGuardar = () => {
        setDatosCliente(datosEditados);
        setEditando(false);
    };

    return (
        <div className="flex flex-row place-content-center place-items-center w-9/12 h-[500px] bg-slate-600 text-black text-center">
            <div className="w-2/4 flex flex-col">
                <button onClick={() => changeTab('personalData')}>Datos personales</button>
                <button onClick={() => changeTab('personalAdress')}>Dirección de Envío</button>
                <button onClick={() => changeTab('shopHistory')}>Historial de Compras</button>
            </div>
            <div className="w-2/4 flex flex-col">
                {clientInfo === 'personalData' && (
                    <div>
                        <h2>Datos del Cliente</h2>
                        {editando ? (
                            <div className='flex flex-col'>
                                <label>
                                    Nombre:
                                    <input type="text" name="nombre" value={datosEditados.nombre} onChange={handleInputChange} />
                                </label>
                                <label>
                                    Apellido:
                                    <input type="text" name="apellido" value={datosEditados.apellido} onChange={handleInputChange} />
                                </label>
                                <label>
                                    Correo electrónico:
                                    <input type="email" name="email" value={datosEditados.email} onChange={handleInputChange} />
                                </label>
                                <label>
                                    Teléfono:
                                    <input type="tel" name="telefono" value={datosEditados.telefono} onChange={handleInputChange} />
                                </label>
                                <button onClick={handleGuardar}>Guardar</button>
                            </div>
                        ) : (
                            <div>
                                <p><strong>Nombre:</strong> {datosCliente.nombre}</p>
                                <p><strong>Apellido:</strong> {datosCliente.apellido}</p>
                                <p><strong>Correo electrónico:</strong> {datosCliente.email}</p>
                                <p><strong>Teléfono:</strong> {datosCliente.telefono}</p>

                                <button onClick={() => { setDatosEditados(datosCliente); setEditando(true); }}>Editar</button>
                            </div>
                        )}
                    </div>
                )}
                {clientInfo === 'personalAdress' && (
                    <div>
                        <h2>Dirección de Envío</h2>
                        {/* Aquí colocas el contenido específico de la vista */}
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
            </div>
        </div>
    );
};

export default ClientInfo;