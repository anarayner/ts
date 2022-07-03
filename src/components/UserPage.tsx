import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import EventExample from "./EventsExemple";
import Card, {CardVariant} from "./Card";

const UserPage: FC = () => {
    // const  users: IUser[] =[
    //     {id: 1, name: 'Victoria', email: '545454', address: {city: "seattle", street: 'Islander', zipcode: '37402' }},
    //     {id: 2, name: 'Victoria', email: '545454', address: {city: "seattle", street: 'Islander', zipcode: '37402' }}
    // ]
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, []);

    async function fetchUsers(){
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }catch{

        }
    }
    return (
        <div>
            <EventExample/>
            <Card
                onClick={(num)=> {
                    console.log(num)
                }}
                variant={CardVariant.outlined}
                width={'200px'}
                height={'200px'}>
                <button>Press me</button>
            </Card>
            <List items={users}
                  renderItem={(user:IUser) => <UserItem user={user} key={user.id}/>}
            />
        </div>
    );
};

export default UserPage;
