import { getUsers } from "@/app/functions/handlerAcessAPI";
import { ToastContainer, toast } from "react-toastify";

export default async function Alterar() {
  const users = await getUsers();
  return(
    <div className='altera-user'>
      {users?.map((user, index) =>
        <p className='p-alterar' key={index}>
            {user.name}: 
            <button className='bt-alterar alterar'><a href="/pages/alteraruser">Alterar</a></button>
        </p>
      )}
        <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
   </div>
  )
}