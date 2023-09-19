'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/register.css'
import Nav from '../components/Navbar'

export default function Login() {


  const alterar = (e) => {
    e.preventDefault();
    toast.success('Usuário registrado com sucesso');

   }

  return (
    <div className="tudo">
      <Nav/>
      <div className="principal card">
      <h1>Alterar Usuário</h1>
      <form onSubmit={alterar}>
      <div className="inpts" >
       <label for="">Novo Nome</label> 
        <input type='text' placeholder="John Doe"/>
        
        </div>
         
        <div className="inpts" >
        <label for="" >Novo E-mail</label>
        <input type="email" placeholder="johndoe@gmail.com"/>
        
        </div>
        <div className="inpts" >
       <label for="">Nova Senha</label> 
        <input type='password' placeholder="*******"/>
        
        </div>
          <button className="entrar-button">Entrar</button>
      </form>
      <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
    </div>
    </div>
  )
}
