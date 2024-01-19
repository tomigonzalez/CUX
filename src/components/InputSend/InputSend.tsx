import { Mic, Send, Smile } from "lucide-react";
import { Context } from "../Context/Context";
import { useContext } from "react";


const InputSend = () => {
//   const [message, setMessage] = useState("");
const context = useContext(Context)!;
  const { switchStates } = context;
  let mic = switchStates["3"];

  return (
    <div className="h-auto w-100 bg-white p-2 flex justify-evenly items-center">
    <input
        className="h-12 w-5/6 rounded-full pl-4 pr-4 text-black font-medium text-gray-800 "
        style={{
            background: "#AAAAAA80",
          }}
        type="text"
        placeholder="Escribe un mensaje"
       
    //   value={message}
    //   onChange={(event) => setMessage(event.target.value)}
    />
    {mic && <Mic color="#67676f"/>}
    <Smile className="" color="#67676f"/>
    <Send  className="" color="#67676f"/>
    
    </div>
  );
};

export default InputSend;