'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/register.css'
import Nav from '../components/Navbar'

export default function Login() {


  const registrar = (e) => {
    e.preventDefault();
    toast.success('Usuário alterado com sucesso');

   }

  return (
    <div className="tudo">
      <Nav/>
      <div className="principal card">
      <h1>Registrar Usuário</h1>
      <form onSubmit={registrar}>
      <div className="inpts" >
       <label for="">Nome</label> 
        <input type='text' placeholder="John Doe"/>
        
        </div>
         
        <div className="inpts" >
        <label for="" >E-mail</label>
        <input type="email" placeholder="johndoe@gmail.com"/>
        
        </div>
        <div className="inpts" >
       <label for="">Senha</label> 
        <input type='password' placeholder="*******"/>
        
        </div>
          <button className="entrar-button">Entrar</button>
      </form>
      <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
    </div>
    </div>
  )
}
