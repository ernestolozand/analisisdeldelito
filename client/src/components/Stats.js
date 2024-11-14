import React from 'react'

export default function Stats() {
    return (
        <div className=''>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-people-robbery  text-5xl"></i>
                                <h2 className="title-font font-medium text-xl mt-4 text-gray-900"> Incidencia delictiva por alcaldías y cuadrantes</h2>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-list text-5xl"></i>
                                <h2 className="title-font font-medium text-xl mt-4 text-gray-900">Clasificación por tipos de delitos y penas</h2>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-chart-simple text-5xl"></i>
                                <h2 className="title-font font-medium text-xl mt-4 text-gray-900">Se estudian las cifras de los delitos de género</h2>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-magnifying-glass-chart text-5xl"></i>
                                <h2 className="title-font font-medium text-xl mt-4 text-gray-900">Empleo de datos abiertos de la FGJ y SSC</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
