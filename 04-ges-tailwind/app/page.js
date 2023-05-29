import Image from "next/image";


export default function Home() {


  return (
    <body>
      <header  className="bg-red-900 flex-auto fixed top-0 w-full h-12">
        <div className="flex-auto justify-start pl-10">
          <Image src='/images/logo.png' width={'120'} height={'80'} className=""/>
        </div>
      </header>
      <div className="mt-14 ml-10 mr-10">
        <h1 className="text-4xl"><strong>Nuevo plan de seguros</strong></h1>

        <nav className="flex flex-row flex-wrap justify-evenly mt-9 mb-5">
          <a href="#" className="">
            <div className="flex items-center bg-gray-300 rounded-2xl p-1 m-1"  >
              <div className="bg-red-600 flex items-center w-6 h-6 rounded-2xl mr-4 justify-center text-white  ">
                <p>1</p>
              </div>
              <p>Datos Personales</p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center m-1">
                 <div className="bg-gray-500 flex items-center w-6 h-6 rounded-2xl mr-4 justify-center  ">
                <p>2</p>
              </div>
              <p>Datos profesionales</p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center m-1">
                <div className="bg-gray-500 flex items-center w-6 h-6 rounded-2xl mr-4 justify-center  ">
                <p>3</p>
              </div>
              <p>Datos financieros</p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center m-1">
                <div className="bg-gray-500 flex items-center w-6 h-6 rounded-2xl mr-4 justify-center  ">
                <p>4</p>
              </div>
              <p>Seguros actuales</p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center m-1">
                <div className="bg-gray-500 flex items-center w-6 h-6 rounded-2xl mr-4 justify-center  ">
                <p>5</p>
              </div>
              <p>Referencias</p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center m-1">
                <div className="bg-gray-500 flex items-center w-6 h-6 rounded-2xl mr-4 justify-center  ">
                <p>6</p>
              </div>
              <p>Generación del pdf</p>
            </div>
          </a>


        </nav>


        <div className="p-6 mb-6 shadow-lg">
          <div>
            <p>Datos personales</p>
          </div>
          <hr className="border-red-600 border-2 mb-4 mt-4 " />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >

            <div>
              <div  className="mb-1 text-gray-500">
                <p>Nombre</p>
              </div>
              <input type="text" name="Nombre" value="LUCILA" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500"/>
            </div>
            <div>
              <div className="mb-1 text-gray-500">
                <p>Apellido 1</p>
              </div>
              <input type="text" name="Nombre" value="FERNANDEZ " className="w-full p-2 text-gray-400 border rounded-sm border-gray-500" />
            </div>
            <div>
              <div className="mb-1 text-gray-500">
                <p>Apellido 2</p>
              </div>
              <input type="text" name="Nombre" value="CUADRADO" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500"/>
            </div>
            <div>
              <div className="mb-1 text-gray-500">
                <p>DNI</p>
              </div>
              <input type="text" name="Nombre" value="DNI" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500"/>
            </div>

            <div>
              <div className="mb-1 text-gray-500">
                <p>Nacionalidad</p>
              </div>
              <select name="Nombre" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="colombia">Colombia</option>
                <option value="españa">España</option>
              </select>
            </div>

            <div>
              <div className="mb-1 text-gray-500">
                <p>Fecha de nacimiento</p>
              </div>
              <input type="date" name="Nombre" value="1970-11-02"className="w-full p-2 text-gray-400 border rounded-sm border-gray-500" />
            </div>

            <div>
              <div className="mb-1 text-gray-500">
                <p>Sexo</p>
              </div>
              <div>
                <label className="m-3 border rounded-md p-2 text-gray-500">
                  <input type="radio" name="sexo" value="Hombre" checked className="hidden"/>
                  <span className="">Hombre</span>
                </label>
                <label className="m-3 border rounded-md p-2 text-gray-500">
                  <input type="radio" name="sexo" value="Mujer" className="hidden" />
                  <span className="">Mujer</span>
                </label>
              </div>
            </div>

            <div>
              <div className="mb-1 text-gray-500">
                <p>Estado civil</p>
              </div>
              <select name="Nombre" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="Casado">Casado/a</option>
                <option value="Soltero">Soltero/a</option>
                <option value="Viudo">Viudo/a</option>
                <option value="Divorciado">Divorciado/a</option>
              </select>
            </div>
          </div>
        </div>


     
        <div className="p-6 mb-6 shadow-lg">
          <div>
            <p>Datos de contacto</p>
          </div>
          <hr className="border-red-600 border-2 mb-4 mt-4 " />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >

            <div>
            <div className="mb-1 text-gray-500">
                <p>Email</p>
              </div>
              <input type="email" name="Nombre" value="mbnav@gmail.com" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500" />
            </div>
            <div>
            <div className="mb-1 text-gray-500">
                <p>Teléfono</p>
              </div>
              <input type="tel" name="Nombre" value="648278947" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500"/>
            </div>
            <div>
            <div className="mb-1 text-gray-500">
                <p>Código Postal</p>
              </div>
              <input type="text" name="Nombre" value="Código postal" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500" />
            </div>
          </div>
        </div>


        <div className="p-6 mb-6 shadow-lg">
          <div>
            <p>Otros datos de interés</p>
          </div>
          <hr className="border-red-600 border-2 mb-4 mt-4 " />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >

            <div>
            <div className="mb-1 text-gray-500">
                <p>¿Suele viajar al menos una vez al año?</p>
              </div>
              <select name="Nombre" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="si">Si</option>
                <option value="no">No</option>

              </select>
            </div>

            <div>
            <div className="mb-1 text-gray-500">
                <p>¿Practica algún deporte?</p>
              </div>
              <select name="Nombre" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="si">Si</option>
                <option value="no">No</option>

              </select>
            </div>
            <div>
            <div className="mb-1 text-gray-500" >
                <p>¿Tiene personas mayores o dependientes a su cargo?</p>
              </div>
              <select name="Nombre" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="si">Si</option>
                <option value="no">No</option>

              </select>
            </div>

            <div>
            <div className="mb-1 text-gray-500">
                <p>¿Tiene hijos/as menores de 23 años?</p>
              </div>
              <select name="Nombre" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="si">Si</option>
                <option value="no">No</option>

              </select>
            </div>

            <div>
            <div className="mb-1 text-gray-500">
                <p>¿Cuántos hijos/as tiene?</p>
              </div>
              <input type="number" name="Nombre" value="3" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500"/>
            </div>

          </div>
        </div>


        <div className="p-6 mb-6 shadow-lg">
          <div>
            <p>Hijos</p>
          </div>
          <hr className="border-red-600 border-2 mb-4 mt-4 " />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
            <div>
            <div className="mb-1 text-gray-500">
                <p>Tipo de colegio</p>
              </div>
              <select name="tipoColegio" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
                <option value="concertado">Concertado</option>
              </select>
            </div>
            <div>
            <div className="mb-1 text-gray-500">
                <p>Tipo de estudios superiores</p>
              </div>
              <select name="tipoEstudios" className="w-full p-2 text-gray-400 border rounded-sm border-gray-500">
                <option value="default" selected disabled>Selecciona una opción</option>
                <option value="universitarios">Universitarios</option>
                <option value="noUniversitarios">No universitarios</option>
              </select>
            </div>
            <div>
            <div className="mb-1 text-gray-500">
                <p>Edad hijo/a (1)</p>
              </div>
              <input type="number" name="edadHijo1" value="3"  className="w-full p-2 text-gray-400 border rounded-sm border-gray-500" />
            </div>
            <div>
            <div className="mb-1 text-gray-500">
                <p>Edad hijo/a (2)</p>
              </div>
              <input type="number" name="edadHijo2" value="3"  className="w-full p-2 text-gray-400 border rounded-sm border-gray-500"/>
            </div>
            <div>
            <div className="mb-1 text-gray-500">
                <p>Edad hijo/a (3)</p>
              </div>
              <input type="number" name="edadHijo3" value="3"  className="w-full p-2 text-gray-400 border rounded-sm border-gray-500"/>
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-[5%]">
          <button className="bg-red-600 pt-4 pb-4 pl-8 pr-8 text-white"><strong>Continuar</strong></button>
        </div>


        <footer className="flex flex- items-center w-full justify-center text-center gap-3 mt-6 mb-6">
      
            <p>Ges Seguros</p>
            <p>©</p>
            <p>Todos los derechos reservados</p>
    
        </footer>
      </div>
    </body>
  )
}
