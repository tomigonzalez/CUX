import {  Trash2 } from 'lucide-react'
import { useContext} from 'react'
import { Icon } from '@iconify/react';
import { Context } from '../Context/Context';


const MenuAccesibility = () => {
  const context = useContext(Context)!;
  

  const {  toggleModal } = context;


  return (
    <section className='flex flex-row justify-between mt-2 border-b pb-2'>
    <div className='font-bold flex items-center w-20 justify-end'><p className='text-black text-2xl'>Chat</p></div>
        <div className='flex flex-row w-100 justify-between w-2/12 gap-0.5'>
            <div className='w-12 bg-green-200 rounded-full flex items-center justify-center'><p className='text-white font-bold text-3xl'>t</p></div>
            <div className='text-left'><p className='text-black relative top-1 font-medium'>Gonzalez Tomas</p><span className='text-gray-500 font-medium'>activo</span></div>
        </div>
    <div className='flex flex-row items-center w-2/12 justify-evenly z-20'>
    <Trash2 color='#67676f'size={23}/>

    
    <Icon className='cursor-pointer w-auto  h-7 text-black hover:text-gray-400' icon="akar-icons:more-vertical" 
    onClick={toggleModal}/>
    </div>
   
    
</section>
  )
}

export default MenuAccesibility