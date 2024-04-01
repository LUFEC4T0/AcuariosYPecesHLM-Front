import React from 'react'
import fondoImg from "../assets/fondo3.png"
import Cards from '../components/Cards'


const Home = () => {
    return (
        <>
        <main className='bg-white fondo'>
            {/* <img className='' src={fondoImg} alt="" /> */}
            <div className='relative top-80 left-96'>
                <a href="/shop">
                    <button className='px-7 mx-2 py-3 text-white bg-[#A62190] rounded-full font-bold shadow-md'>ir Tienda</button>
                </a>
                <a href="#">
                    <button className='px-7 mx-2 py-3 text-white bg-gray-900 rounded-full font-bold shadow-md'>Ofertas</button>
                </a>
            </div>
            <div className="container mx-auto py-8 posicion">
                    <h1 className="text-3xl font-bold text-center mb-8 text-white">Productos Destacados</h1>
                    <Cards />
            </div>
        </main>
        </>
    )
   
}
export default Home