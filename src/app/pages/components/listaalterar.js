import { getUsers } from "@/app/functions/handlerAcessAPI";
import { ToastContainer, toast } from "react-toastify";

export default async function Alterar() {
  const users = await getUsers();
  return(
    <div className='altera-user'>
      {users?.map((user, index) =>
        <p className='p-alterar' key={index}>
            {user.name}: 
            <button className='bt-alterar alterar'>Alterar</button>
            <button className='bt-alterar excluir'>Excluir</button>
        </p>
      )}
        <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
   </div>
  )
}