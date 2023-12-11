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

    const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
    const useAuth = await responseOfApi.json();
    return useAuth;

}


const postUser = async (user) => {

    const responseOfApi = await fetch(url + "/user",
    {
        method: "POST",
        cache:"no-cache",
        headers: {"Content-Type" : "application/json"},  //Informando os dados que serão enviados e os tipos de dados que serão enviados
        body: JSON.stringify(user)
    }
    )
    const userSave = await responseOfApi.json();
    return userSave;
}

const updateUser = async (user, id) =>{
    try{
        const responseOfApi = await fetch(url + "/user/" + id, {
            method: 'PUT',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(user)
        });
        console.log("Indo")
        const userUpdate = await responseOfApi.json();
        console.log(userUpdate)
        return userUpdate;
    }
    catch{
        return null;
    }
}








export { getUsers, getUserAuthenticated, postUser, updateUser };