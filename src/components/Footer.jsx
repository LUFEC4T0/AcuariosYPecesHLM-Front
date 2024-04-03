import React from 'react'

const Footer = () => {
    return (
        <>
        <img className='w-[100%] h-[1.5rem]' src="../public/barraFooter.png" alt="" />
            <footer className="bg-gray-900 text-white text-center p-5 lg:h-[20rem] flex flex-wrap justify-around gap-5">
                <div className='flex flex-col w-[18rem] justify-between p-3'>
                    <img className='w-[5rem]' src="../public/Acuarios HLM logo blanco (sin letras) PNG.png" alt="" />
                    <p className='mt-3 text-justify text-[.9rem] text-[#c9c9c9]' >Ya seas un aficionado entusiasta o un profesional experimentado, nuestro objetivo es ser tu socio de confianza en cada paso del camino.</p>
                    <div className='flex gap-5 items-start'>
                        <img className='w-[1.3rem] mt-3' src="../public/logoFacebook.png" alt="" />
                        <img className='w-[1.3rem] mt-3' src="../public/logoInstagram.png" alt="" />
                        <img className='w-[1.3rem] mt-3' src="../public/logoWhatsapp.png" alt="" />
                    </div>
                    <p className='mt-3 text-[.7rem] text-[#c9c9c9] text-start'>&copy; 2022 Acuario Y Peces HLM. All rights reserved.</p>
                </div>
                <div className='flex flex-col w-[18rem] justify-center gap-3 p-3'>
                    <p className='text-start'>Paginas</p>
                    <div>
                        <p className='my-2 text-[#c9c9c9] text-[.9rem] text-start'>Inicio</p>
                        <p className='my-2 text-[#c9c9c9] text-[.9rem] text-start'>Tienda</p>
                        <p className='my-2 text-[#c9c9c9] text-[.9rem] text-left'>Sobre Nosotros</p>
                        <p className='my-2 text-[#c9c9c9] text-[.9rem] text-start'>Contacto</p>
                        <p className='my-2 text-[#c9c9c9] text-[.9rem] text-start'>Inicia Sesión</p>
                    </div>
                </div>
                <div className='flex flex-col w-[18rem] justify-center gap-3 p-3'>
                    <p className='text-start'>Contacto</p>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <img className='w-[1rem] h-[1rem] mr-2' src="../public/logoTelefono.png" alt="" /><p className='my-2 text-[#c9c9c9] text-[.9rem]'>+57 319 682 0102</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-[1.2rem] h-[1.2rem] mr-2' src="../public/logoCorreo.png" alt="" /><p className='my-2 text-[#c9c9c9] text-[.9rem]'>acuarioypeceshlm@gmail.com</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-[1.2rem] h-[1.2rem] mr-2' src="../public/logoUbicacion.png" alt="" /><p className='my-2 text-[#c9c9c9] text-[.9rem]'>Calle 55 # 1B-39 (La Dorada)</p>
                        </div>
                    </div>
                </div>
            </footer>
            <img className='w-[100%] h-[1.5rem]' src="../public/barraFooter.png" alt="" />
        </>
    )
}

export default Footer