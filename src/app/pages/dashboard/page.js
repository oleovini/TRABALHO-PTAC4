import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../styles/dashboard.css';

const abrirnav = document.querySelector('button');


export default async function Dashboard() {
    const req = await fetch("http://localhost:3000/pages/dashboard", {
    cache: "no-cache"});

    const users = await getUsers();
    return (
        <div>

            <div className="button">

            <div className="n-bar" id="nbar">
                  <div><span><img className="logo" src="../logo.png"/></span></div>

                <a href="#">   <div className="links">Inicio</div>     </a>

                <a href="#">   <div className="links">Registrar</div> </a>

                <a href="#">   <div className="links">Alterar</div>   </a>

                <a href="#" className="out">   <div className="links">Sair</div></a>

            </div>

                <button className="btnavbar">Nav</button>
            </div>
            <h1>Home</h1>
            <div className="user-list">
                {users?.map((user, index) =>
                    <p key={index}>
                        {user.name}
                    </p>
                )}
            </div>
        </div>
    );
};