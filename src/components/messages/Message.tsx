import React from 'react';

interface PropsInterface {
    content: string
}

/**
 * Message component, responsible for rendering message such as error, warning, info etc.
 * @param props
 * @constructor
 */
const Message = (props: PropsInterface) => {
    return (
        <div>
            {props.content}
        </div>
    )
};

export default Message;