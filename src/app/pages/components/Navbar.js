export default function Naavbar(){
  return(
    <div className="n-bar" id="nbar">
    <div><span><img className="logo" src="../logo.png"/></span></div>

  <a href="#">   <div className="links">Inicio</div>     </a>

  <a href="#">   <div className="links">Registrar</div> </a>

  <a href="#">   <div className="links">Alterar</div>   </a>

  <a href="#" className="out">   <div className="links">Sair</div></a>

</div>
  )
}