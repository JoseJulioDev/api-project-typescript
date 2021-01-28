

interface TecObject {
    title: string,
    experience: number
}

interface CreateUserData {
    name ?: string,
    email : string, 
    password : string,
    tecs: Array<string | TecObject>
    // tecs: string[] 
}

export default function createUser({name, email, password, tecs}: CreateUserData) {
    const user  = {
        name,
        email,
        password,
        tecs
    }

    return user;
}
