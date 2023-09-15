import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../styles/register.css';
import Nav from "../components/Navbar";
export default async function Dashboard() {
    const users = await getUsers();
    return (
          <div>
                 <Nav/>
          </div>

    );
};