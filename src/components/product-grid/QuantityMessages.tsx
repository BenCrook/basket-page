import React from 'react';
import Message from '../messages/Message';

interface PropsInterface {
    qtyInBag: number,
    max: number
}

/**
 * Displays a message if the quantity is set above the max.
 * @param props
 * @constructor
 */
const QuantityMessaging = (props: PropsInterface) => {
    const {qtyInBag, max} = props;

    if (qtyInBag >= max) {
        return (
            <Message content={`A maximum of ${max} can be purchased`} />
        )
    }

    return null;
};

export default QuantityMessaging;
