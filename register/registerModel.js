export const createUser = async (name,email,pw) => {
    // func async
    //try catch
    //recibiremos nombre y usuario  y password
    //usaremos fetch para conectar con el api

    const response = await fetch('http://localhost:8000/auth/register',{
        method: "POST",
        body: JSON.stringify({
            name,
            username: email,
            password: pw
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    if(!response.ok){
        const data = await response.json()

        throw new Error(data.message)
    }
}