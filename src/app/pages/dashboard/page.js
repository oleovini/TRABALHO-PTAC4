import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../styles/dashboard.css';
import Nav from "../components/Navbar";
import Link from 'next/link';

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
                 <Link className='users-list' href={`/pages/alterar/${user.id}`}>
                    <p key={index}>
                        {user.name}
                    </p>
                 </Link>
                )}
            </div>

           </div>
        </div>
    );
};