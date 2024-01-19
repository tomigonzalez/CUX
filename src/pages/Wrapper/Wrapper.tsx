import 'tailwindcss/tailwind.css';
import MenuModal from '../../components/menuModal/MenuModal';
import NavBar from '../../components/NavBar/NavBar';
import { useContext } from 'react';
import { Context } from '../../components/Context/Context';


type Props = {
    children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Wrapper = (props: Props) => {

  const example = useContext(Context) as any;
  return (
    <>
        
        <section className=" overflow-hidden w-full h-full bg-white flex absolute transition-all duration-300">
          
        <NavBar />
        <MenuModal mostrarModal={example.mostrarModal} />
        {/* {example.mostrarModal && <MenuModal mostrarModal={example.mostrarModal}/>} */}
        
        {props.children}
        </section>
    </>
  )
}

export default Wrapper;