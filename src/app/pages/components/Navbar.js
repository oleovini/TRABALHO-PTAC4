'use client'

import { useRouter } from "next/navigation";
import "../styles/login.css";
import Cookies from "js-cookie";
import '../styles/dashboard.css'

export default function Naavbar() {

  const { push, refresh } = useRouter();
  const handlerRemoveCookies = async (e) => {
    e.preventDefault();
    Cookies.remove('token');
    localStorage.removeItem('name');
    refresh('/')

  }

  return(
    <div className="n-bar" id="nbar">
    <div><span><img className="logo" src="../logo.png"/></span></div>

  <a href="/">   <div className="links">Inicio</div>     </a>

  <a href="/pages/registrar">   <div className="links">Registrar</div> </a>

  <a href="/pages/alterar">   <div className="links">Alterar</div>   </a>

  <a href="#" className="out">   <div className="links"><button className="sem-estilo" onClick={handlerRemoveCookies}>Sair</button></div></a>


</div>

  )
}
