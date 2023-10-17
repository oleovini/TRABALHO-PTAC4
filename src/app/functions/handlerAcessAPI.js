'use server'

const url = "https://users-leovini.vercel.app"



const getUserAuthenticated = async (user) => {

    const responseOfApi = await fetch(url + "/user/authenticated",
    {
        method: "POST",
        cache:"no-cache",
        headers: {"Content-Type" : "application/json"},  //Informando os dados que serão enviados e os tipos de dados que serão enviados
        body: JSON.stringify(user)
    }
    )
    const useAuth = await responseOfApi.json();
    return useAuth;
}

const getUsers = async (user) =>{

    const responseOfApi = await fetch(url + "/users")
    const useAuth = await responseOfApi.json();
    return useAuth;

}

export { getUsers, getUserAuthenticated };