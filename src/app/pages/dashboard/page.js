import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../styles/dashboard.css'




export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div className="tudo">
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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