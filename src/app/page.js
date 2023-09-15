'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './pages/styles/login.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
  const userAuth =await handlerAcessUser(user);
  if(userAuth.token === undefined){
    toast.error(<span className="spanz">Erro no e-mail ou senha</span>);
  }
  push('/pages/dashboard')
    } catch {
      toast.error("erro na aplicação")
    }
  };


  return (
    <div className="tudo">
      <div className="principal card">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <div className="inpts" >
        <label for="" >E-mail</label>
        <input type="email" placeholder="joaodasilva@gmail.com"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
        />
        
        </div>
        <div className="inpts" >
       <label for="">Senha</label> 
        <input type='password' placeholder="*******"
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
        />
        
        </div>
         
          <button className="entrar-button">Entrar</button>
      </form>
      <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
    </div>
    </div>
  )
}
