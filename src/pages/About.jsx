import React from 'react'

const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A62190] via-[#6583BF] to-[#48B0D9]">
        <h1 className='text-cyan-300 text-4xl font-bold mb-10 font-mono '>Sobre nosotros</h1>
        <div className='flex gap-10'>
            <img className='w-[45rem] shadow-black shadow-2xl rounded-xl' src="../public/imgAbout.jpg" alt="" />
            <div className='w-[45rem] flex items-center'>
                <p className='text-justify text-gray-200 font-mono'>En <span className='font-bold text-cyan-300'>Acuarios y Peces HLM</span>, nos apasiona proporcionarte las herramientas y conocimientos necesarios para explorar el maravilloso mundo de los acuarios y los peces. Ya seas un aficionado entusiasta o un profesional experimentado, nuestro objetivo es ser tu socio de confianza en cada paso del camino. Desde la selección del acuario perfecto hasta la creación de un entorno acuático próspero y equilibrado, estamos aquí para ayudarte a hacer realidad tus sueños acuáticos.<br/><br/> Con una amplia gama de productos de calidad y un equipo dedicado de expertos en acuarios, estamos comprometidos a brindarte una experiencia excepcional en el cuidado de peces y acuarios. Únete a nosotros en nuestro viaje para explorar la belleza y la tranquilidad del mundo submarino y descubre todo lo que <span className='font-bold text-cyan-300'>Acuarios y Peces HLM</span> tiene para ofrecer.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About