import React from 'react';

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className='sendMessage-form'
                >
                    <input 
                        className='sendMessage-form-input'
                        onChange={this.handleChange}
                        value={this.state.message}
                        placeholder="Type message and press Enter"
                        type="text"
                    />
                </form>
            </div>
        )
    }
}

export default SendMessageForm;