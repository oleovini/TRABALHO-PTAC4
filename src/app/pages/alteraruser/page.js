'use client'

import 'react-toastify/dist/ReactToastify.css';
import '../styles/register.css';
import Nav from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";


export default async function Alterar() {

   const enviar = (e) => {
    e.preventDefault();
    toast.success('Usuário alterado com sucesso')
   }

    return (
        <div className="tudo">
            <Nav/>
        <div className="principal card">
        <h1>Alterar Usuário</h1>
        <form onSubmit={enviar}>
        <div className="inpts" >
         <label for="">Novo Nome</label> 
          <input id="nome" type='text' placeholder="John Doe"/>
          
          </div>
          <div className="inpts" >
          <label for="" >Novo E-mail</label>
          <input id='mail' type="email" placeholder="johndoe@gmail.com" />
          
          </div>
          <div className="inpts" >
         <label for="">Nova Senha</label> 
          <input id='passwd' type='password' placeholder="*******"/>
          
          </div>
           
            <button className="entrar-button">Alterar</button>
        </form>
        <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
      </div>
      </div>
    );
};