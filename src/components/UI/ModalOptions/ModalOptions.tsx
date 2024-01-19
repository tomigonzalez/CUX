import { Icon } from '@iconify/react/dist/iconify.js'

import Switcher1 from '../ToggleButton/Switcher1'

type Props = {
    texto : string,
    icon : string,
    valor : string,
}

const ModalOptions = (props: Props) => {
  return (
    <div className=" flex flex-row ">   
          <div className='w-3/6 flex flex-col'>
            <Icon icon={props.icon} className='w-full text-2xl' /> 
            <p className='font-medium'>{props.texto}</p>
          </div>
          <div className="w-1/2 self-center">
          <Switcher1 valor={props.valor} ></Switcher1>
          </div>
        </div>
  )
}

export default ModalOptions