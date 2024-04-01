import React from 'react'
import fondoImg from "../assets/fondo3.png"
import Cards from '../components/Cards'


const Home = () => {
    return (
        <>
        <main className='bg-white fondo'>
            {/* <img className='' src={fondoImg} alt="" /> */}
            <div className="container mx-auto py-8 posicion">
                    <h1 className="text-3xl font-bold text-center mb-8 text-white">Productos Destacados</h1>
                    <Cards />
                    <div className='bg-white'>

                    </div>
            </div>
        </main>
        </>
    )
   
}
export default Home