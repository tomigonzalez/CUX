import { Heart} from 'lucide-react'
import  { useContext, useEffect, useState } from 'react'

import InputSend from '../InputSend/InputSend';
import MenuAccesibility from '../Accesibility/MenuAccesibility';
import Footer from '../footer/Footer';

import { Context } from '../Context/Context';



const Chat = () => {

  const context = useContext(Context)!;
  const { switchStates } = context;
  let tamañoTexto = switchStates['1'];
  let contraste = switchStates["2"];
  
  const [horaActual, setHoraActual] = useState<Date >();

  useEffect(() => {
      setHoraActual(new Date());
  }, []);
 
  return (
    <article className='h-full w-full bg-white flex-col '>
       <MenuAccesibility />

        <section className='h-3/4 w-full flex flex-col overflow-y-scroll p-4'>

        <div className='h-auto w-full flex flex-wrap font-regular'>
                  <div className='w-full flex  gap-1'>
                      <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center'>
                      <p className='text-white font-bold text-3xl'>t</p>
                      </div>
                    <div className='text-black'><p className='font-medium pt-1'>CUX.IA</p></div> 
                  </div>
               
                <div  style={{background: contraste ? "#000000" : "#AAAAAA80" ,}} className={`h-max w-8/12 rounded-tr-xl rounded-bl-xl rounded-br-xl ml-16 ${
    tamañoTexto ? 'text-3xl' : 'text-lg'} ${
      contraste ? 'text-white font-bold' : 'text-black'}`}>
                  <div className=''> <p className=' p-2 text-left'>Lorem ipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantium dolore!</p> 
                  </div>
                      <div className='w-full text-right'>
                        <span className='font-medium pr-4 text-gray-400'>
                          { horaActual?.toLocaleTimeString('es-ES', {hour: 'numeric', minute: 'numeric',})}
                        </span>
                      </div>
                </div>
                <div className='self-center pl-3'><Heart /></div>
              </div>


              <div className='h-auto w-full flex flex-col font-regular'>
                  <div className='w-full flex  gap-1 flex-row-reverse'>
                      <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center'>
                      <p className='text-white font-bold text-3xl'>t</p>
                      </div>
                    <div className='text-black'><p className='font-medium pt-1'>Gonzalez Tomas</p></div> 
                  </div>

               <div  className='flex flex-row-reverse'>
                <div style={{background: contraste ? "#9b9b9b " : "#A8E5B0",}} className={`h-max w-8/12  rounded-tl-xl rounded-bl-xl rounded-br-xl mr-16 ${
    tamañoTexto ? 'text-3xl ' : 'text-lg'} ${contraste ? 'text-white font-bold' : 'text-black'}` }>
                  <div className=''> <p className='text-black p-2 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima natus possimus distinctio unde ducimus, ut fugit accusamus incidunt non porro mollitia ea alias ipsam! Ex, odit! Dolorem, accusantium dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima natus possimus distinctio unde ducimus, ut fugit accusamus incidunt non porro mollitia ea alias ipsam! Ex, odit! Dolorem, accusantium dolore!</p> 
                  </div>
                      <div className='w-full text-right'>
                        <span className=' font-medium pr-4 text-gray-400'>
                          { horaActual?.toLocaleTimeString('es-ES', {hour: 'numeric', minute: 'numeric',})}
                        </span>
                      </div>
                </div>
                <div className='self-center pr-3'><Heart /></div>
                </div>
              </div>



              <div className='h-auto w-full flex flex-wrap font-regular'>
                  <div className='w-full flex  gap-1'>
                      <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center'>
                      <p className='text-white font-bold text-3xl'>t</p>
                      </div>
                    <div className='text-black font-regular'><p className='font-medium pt-1'>CUX.IA</p></div> 
                  </div>
               
                  <div  style={{background: contraste ? "#000000" : "#AAAAAA80" ,}} className={`h-max w-8/12 rounded-tr-xl rounded-bl-xl rounded-br-xl ml-16 ${
    tamañoTexto ? 'text-3xl' : 'text-lg'} ${
      contraste ? 'text-white font-bold' : 'text-black'}`}>
                  <div className=''> <p className='p-2 text-left'>Lorem ipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantiumipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantiumipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantiumipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantiumipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantiumipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantium dolore!</p> 
                  </div>
                      <div className='w-full text-right'>
                        <span className='font-medium pr-4 text-gray-400'>
                          { horaActual?.toLocaleTimeString('es-ES', {hour: 'numeric', minute: 'numeric',})}
                        </span>
                      </div>
                </div>
                <div className='self-center pl-3'><Heart /></div>
              </div>
              

              <div className='h-auto w-full flex flex-wrap font-regular'>
                  <div className='w-full flex  gap-1'>
                      <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center'>
                      <p className='text-white font-bold text-3xl'>t</p>
                      </div>
                    <div className='text-black'><p className='font-medium pt-1'>CUX.IA</p></div> 
                  </div>
               
                  <div  style={{background: contraste ? "#000000" : "#AAAAAA80" ,}} className={`h-max w-8/12 rounded-tr-xl rounded-bl-xl rounded-br-xl ml-16 ${
    tamañoTexto ? 'text-3xl' : 'text-lg'} ${
      contraste ? 'text-white font-bold' : 'text-black'}`}>
                  <div className=''> <p className=' p-2 text-left'>Lorem ipsumtia ea alias ipsam! Ex, odit! Dolorem, accusantium dolore!</p> 
                  </div>
                      <div className='w-full text-right'>
                        <span className='font-medium pr-4 text-gray-400'>
                          { horaActual?.toLocaleTimeString('es-ES', {hour: 'numeric', minute: 'numeric',})}
                        </span>
                      </div>
                </div>
                <div className='self-center pl-3'><Heart /></div>
              </div>
              
        </section>
        <InputSend />

        <Footer />
        
    </article>
  )
}

export default Chat