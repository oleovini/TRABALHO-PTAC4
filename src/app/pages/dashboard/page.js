import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../styles/dashboard.css'




export default async function Dashboard() {
    const req = await fetch("http://localhost:3000/pages/dashboard", {
    cache: "no-cache"});

    const users = await getUsers();
    return (
        <div>

            <div className="n-bar">
                <a href="#">   <div className="links">Home</div>     </a>

                <a href="#">   <div className="links">Register</div> </a>

                <a href="#">   <div className="links">Modify</div>   </a>

                <a href="#">   <div className="links">Out</div>      </a>'

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