import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {NavLink, useNavigate, useParams} from "react-router-dom";

interface UserItemPageParams{
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    // @ts-ignore
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();


    useEffect(() => {
        fetchUser()
    }, []);

    async function fetchUser(){
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/` + params.id)
            setUser(response.data)
        }catch{

        }
    }
    return (
        <div>
             <button onClick={()=>navigate('/users')}>Back</button>
            <h1>User {user?.name}</h1>
        </div>
    );
};

export default UserItemPage;
