'use client'

import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Alterar() {
  const excluir = (e) => {
    e.preventDefault();
    toast.success('Usuário registrado')
   }
  const users = await getUsers();
  return(
    <div className='altera-user'>
      <form onSubmit={excluir}>
      {users?.map((user, index) =>
        <p className='p-alterar' key={index}>
            {user.name}: <button className='bt-alterar alterar'>Alterar</button><button className='bt-alterar excluir'>Excluir</button>
        </p>
      )}
      </form>
   </div>
  )
}