import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../styles/dashboard.css'




export default async function Dashboard() {
    const req = await fetch("http://localhost:3000/pages/dashboard", {
    cache: "no-cache"});

    const users = await getUsers();
    return (
        <div className="tudo">
            
            <div className="n-bar">
                <a href="#">   <div>Home</div>     </a>

                <a href="#">   <div>Register</div> </a>

                <a href="#">   <div>Modify</div>   </a>

                <a href="#">   <div>Out</div>      </a>'

            </div>

            <h1>Home</h1>
            <div className="user-list, card">
                {users?.map((user, index) =>
                    <p key={index}>
                        {user.name}
                    </p>
                )}
            </div>
        </div>
    );
};