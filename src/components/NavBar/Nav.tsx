import { BookLock, Building, FileText, MessageCircleHeart, MessageCircleMore, MessageSquareText, UserSearch } from "lucide-react"




const Nav = () => {
  return (
   <nav className='absolute h-full w-full flex flex-col items-center justify-around'>
    <div className='w-2/5 m-6'>
    <img src='CUX.png' className="h-full w-full"/>
    </div>
    
    <ul className=' h-full w-5/6 pb-14 pt-3 flex flex-col justify-around text-left     @apply text-xl font-bold '>

        <li className=' flex gap-2 text-gray-600'><MessageSquareText size={30}/><a href='#'>CUX</a></li>
        <li className='flex gap-2 hover:text-gray-800'><MessageCircleMore /><a href='#' >CUX en WhathsApp</a></li>
        <li className='flex gap-2 hover:text-gray-800'><BookLock /><a href='#'>Secretos</a></li>
        <li className='flex gap-2 hover:text-gray-800'><Building /><a href='#'>Instituciones</a></li>
        <li className='flex gap-2 hover:text-gray-800'><UserSearch /><a href='#'>Profesionales</a></li>
        <li className='flex gap-2 hover:text-gray-800'><MessageCircleHeart /><a href='#'>SuperAmigos</a></li>
        <li className='flex gap-2 hover:text-gray-800'><FileText /><a href='#'>Mis datos</a></li>
        
    </ul>

    <div className="w-4/6 text-right hover:text-gray-600"><p className='font-bold'><a href='#'>Cerrar sesion</a></p></div>
    </nav> 
  )
}

export default Nav