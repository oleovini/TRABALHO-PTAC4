'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/register.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postUser } from "@/app/functions/handlerAcessAPI";
import Nav from '../components/Navbar';

export default function registrar() {
  const [user, setUser] = useState({
    name:'',
    email: '',
    password: '',
  });
  const { push} = useRouter();

  const handlerFormSubmit = async (event) =>{
    event.preventDefault();
    try{
      await postUser(user);
      await new Promise((resolve) =>{
        toast.success('Usuário cadastrado com sucesso');
        setTimeout(resolve, 5000)
      });
      return push("/pages/dashboard")
    } catch{
      return toast.error("Erro")
    }
  }
  return (
    <div className="tudo">
      <Nav/>
      <div className="principal card">
      <h1>Registrar Usuário</h1>
      <form onSubmit={handlerFormSubmit}>
      <div className="inpts" >
       <label for="">Nome</label> 
        <input type='text' placeholder="John Doe" required onChange={(event) => { setUser({ ...user, name: event.target.value })}}/>
        
        </div>
         
        <div className="inpts" >
        <label for="" >E-mail</label>
        <input type="email" placeholder="johndoe@gmail.com" required onChange={(event) => { setUser({ ...user, email: event.target.value })}}/>
        
        </div>
        <div className="inpts" >
       <label for="">Senha</label> 
        <input type='password' placeholder="*******" required onChange={(event) => { setUser({ ...user, password: event.target.value })}}/>
        
        </div>
        <input type="submit" value="Cadastrar" />
        
      </form>
      <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
    </div>
    </div>
  )
}
