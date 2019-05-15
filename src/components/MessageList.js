import React from 'react';

//Messages are fetched into state, passed down as props
//and mapped to become an unordered list element
const MessageList = (props) => (
    <div>
        <ul className='messageList'>
            {
                props.messages.map(message => (
                    <li 
                    className='message'
                    key={message._id}>
                        <div>{message.author}</div>
                        <div>{message.message}</div>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default MessageList;