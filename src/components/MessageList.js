import React from 'react';

const MessageList = (props) => (
    <div>
        <ul>
            {
                props.messages.map(message => (
                    <li key={message._id}>
                        <div>{message.author}</div>
                        <div>{message.message}</div>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default MessageList;