'use server'

const url = "https://aula-17-10-eight.vercel.app/"



const getUserAuthenticated = async (user) => {

    const responseOfApi = await fetch(url + "/user/authenticate",
    {
        method: "POST",
        headers: {"Content-Type" : "application/json"},  //Informando os dados que serão enviados e os tipos de dados que serão enviados
        body: JSON.stringify(user)
    }
    )
    const useAuth = await responseOfApi.json();
    return useAuth; 
   // let userAuth = {}
   // for (let i = 0; i < users.length; i++) {
   //     if(users[i].email === user.email && users[i].password === user.password) 
   //     {
   //         userAuth=users[i];
   //     }
   // }

   // return userAuth;


}

const getUsers = (user) =>{


  //  return users;
}

export { getUsers, getUserAuthenticated };