import React, {useState} from 'react';

type AuthUser = {
    name: string
    email: string
}

const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name: 'Test test',
            email: 'test@mail.ru'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    );
};

export default User;