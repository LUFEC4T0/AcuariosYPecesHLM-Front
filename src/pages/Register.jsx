import React from 'react'

const Register = () => {
    return (
        <>
            <div className="min-h-screen flex justify-center  py-12 px-4 sm:px-6 lg:px-8 items-center bg-gradient-to-br from-[#A62190] via-[#6583BF] to-[#48B0D9]">
                <div className="space-y-8 p-10 bg-white rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-4 text-3xl font-bold text-gray-900">
                            ¡Registrate!
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">Completa los datos solicitados</p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className='flex flex-wrap justify-between'>
                            <div className="w-[49%]">
                                <label className="text-sm font-bold text-gray-700 tracking-wide">Primer Nombre</label>
                                <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Juan"></input>
                            </div>
                            <div className="w-[49%]">
                                <label className="text-sm font-bold text-gray-700 tracking-wide">Primer Apellido</label>
                                <input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Lopez"></input>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between'>
                            <div className="w-[49%]">
                                <label className="text-sm font-bold text-gray-700 tracking-wide">Telefono</label>
                                <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="313-123-4567"></input>
                            </div>
                            <div className="w-[49%]">
                                <label className="text-sm font-bold text-gray-700 tracking-wide">Direccion</label>
                                <input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Calle 123 # 123 - 123"></input>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between'>
                            <div className="w-[49%]">
                                <label className="text-sm font-bold text-gray-700 tracking-wide">Correo electronico</label>
                                <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="juanlopez@example.com"></input>
                            </div>
                            <div className="w-[49%]">
                                <label className="text-sm font-bold text-gray-700 tracking-wide">Contraseña</label>
                                <input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="************"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"></input>
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Recuérdame
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-[#48B0D9] text-gray-100 p-4  rounded-full tracking-widefont-semibold  focus:outline-none focus:shadow-outline hover:bg-[#357e9b] shadow-lg cursor-pointer transition ease-in duration-300">
                                Registrarme
                            </button>
                        </div>
                        <p className="flex items-center justify-center mt-10 text-center text-md text-gray-500">
                            <span>¿Tienes una cuenta?<a href="#" className="text-[#48B0D9] hover:text-[#357e9b] no-underline cursor-pointer transition ease-in duration-300"> Iniciar sesion</a> </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register