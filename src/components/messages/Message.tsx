import React from 'react';

interface PropsInterface {
    content: string
}

const Message = (props: PropsInterface) => {
    return (
        <div>
            {props.content}
        </div>
    )
};

export default Message;