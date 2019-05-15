import React from 'react';

class SendMessageForm extends React.Component {
    state = {
        message: ''
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        placeholder='Type message and press Enter'
                    />
                </form>
            </div>
        )
    }
}

export default SendMessageForm;