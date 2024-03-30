import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState } from 'react';
const ClientInfo = () => {
    //Creo una variable de estado para mis definir la vista actual de cada componente.
    const [clientInfo, setclientInfo] = useState('personalData');
    //Variable de estado con los datos del cliente


    //Función para cambiar el estado cuando se apreta un botón de navegación.
    const changeTab = (clientinfo) => {
      setclientInfo(clientinfo);
    };


    //Función para fetchear info.

  
    return (
      <div className='bg-color:green'>
        <div className="barra-lateral">
          <button onClick={() => changeTab('personalData')}>Datos del Cliente</button>
          <button onClick={() => changeTab('personalAdress')}>Dirección de Envío</button>
          <button onClick={() => changeTab('shopHistory')}>Historial de Compras</button>
        </div>
        <div className="contenido">
          {clientInfo === 'datosCliente' && (
            <div>
              {/* Contenido de la vista de datos del cliente */}
              <h2>Datos del Cliente</h2>
              {/* Aquí colocas el contenido específico de la vista */}
            </div>
          )}
          {clientInfo === 'direccionEnvio' && (
            <div>
              {/* Contenido de la vista de dirección de envío */}
              <h2>Dirección de Envío</h2>
              {/* Aquí colocas el contenido específico de la vista */}
            </div>
          )}
          {clientInfo === 'historialCompras' && (
            <div>
              {/* Contenido de la vista de historial de compras */}
              <h2>Historial de Compras</h2>
              {/* Aquí colocas el contenido específico de la vista */}
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default ClientInfo