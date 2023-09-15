import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/alterar.css';
import Nav from "../components/Navbar";
import List from "../components/listaalterar"


export default async function Alterar() {
    return (
          <div>
                 <Nav/>
                 <List/>
                 <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
          </div>

    );
};