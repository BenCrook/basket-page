import React from 'react';
import Message from "../messages/Message";

interface PropsInterface {
    qtyInBag: number,
    max: number
}

const QuantityMessaging = (props: PropsInterface) => {
    const {qtyInBag, max} = props;

    if (qtyInBag >= max) {
        return (
            <Message content={`A maximum of ${max} can be purchased`} />
        )
    }

    if (qtyInBag <= 0) {
        return (
            <Message content={`A quantity of ${qtyInBag} cannot be purchased`} />
        )
    }

    return null;
};

export default QuantityMessaging;
