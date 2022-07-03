import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps{
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '20px', border: '1px solid grey', margin: '5px'}}>
            {user.id}. {user.name}   {user.address.city}, {user.address.street}, {user.address.zipcode}
        </div>
    );
};

export default UserItem;
