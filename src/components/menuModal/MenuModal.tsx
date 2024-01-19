
import ModalOptions from '../UI/ModalOptions/ModalOptions'

type Props = {
  mostrarModal : boolean,
  
}

const MenuModal = (props: Props) => {
  return (
    <div className={` ${props.mostrarModal ? 'left-3/4 ' : 'left-full '} mt-20 z-10 absolute w-64 h-60 bg-gray-200  transition-all duration-600 overflow-hidden rounded-tl-xl rounded-bl-xl rounded-br-xl `}>
    <div  className= "  w-64 h-60 bg-gray-400 rounded-tl-xl rounded-bl-xl rounded-br-xl flex flex-col justify-around pl-1">
        
    <ModalOptions texto={"Agrandar fuente"} icon={"formkit:text"} valor={"1"}></ModalOptions>
    <ModalOptions texto={"Contraste"} icon={"ri:contrast-fill"} valor={"2"}></ModalOptions>
    <ModalOptions texto={"Navegacion por voz"} icon={"ri:user-voice-line"} valor={"3"}></ModalOptions>

        
       
    </div>
    </div>
   
  )
}

export default MenuModal