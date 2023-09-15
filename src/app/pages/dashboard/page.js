import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../styles/dashboard.css';
import Nav from "../components/Navbar";

export default async function Dashboard() {
    const users = await getUsers();
    return (
        <div>
            <div className="btbt">
                 <Nav/>
            </div>
           <div className='homeclass'>
           <h1 className='txth1'>Lista de Usuários</h1>
            <div className="user-list">
                {users?.map((user, index) =>
                    <p key={index}>
                        {user.name}
                    </p>
                )}
            </div>

           </div>
        </div>
    );
};