import Link from 'next/link'


export default function Naavbar(){
  return(
    <div className="n-bar" id="nbar">
    <div><span><img className="logo" src="../logo.png"/></span></div>

  <Link href="/pages/dashboard">   <div className="links">Inicio</div>     </Link>

  <Link href="/pages/registrar">   <div className="links">Registrar</div> </Link>

  <Link href="#">   <div className="links">Alterar</div>   </Link>

  <Link href="#" className="out">   <div className="links">Sair</div></Link>

</div>
  )
}