import React, {FC} from 'react';

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {

    const {messageCount = 0 } = props;

    return (
        <div>
            { props.isLoggedIn ? <p>Hello {props.name} how are you? You have {messageCount} messages</p> : <p>Please logged in</p>}
            <p>Hello {props.name} how are you? You have {messageCount} messages</p>
        </div>
    );
};

export default Greet;