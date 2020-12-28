import React, { Component } from 'react'


const styles = {
    button1: {
        display: 'flex',
        justifyContent: 'right'
    }
}


class Ccomponent extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        emailError:'',
        from: '',
        to: '',
        comment: '',
        type: '',
        visibility: false,
        items: ['Task card with some info']
    }

    change = (e) => {
        const {name, value} = e.target
        this.setState({ [name]:value})
    }

    handleClick = () => {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }
    
    validate = () => {
        let emailError = ''

        if (!this.state.email.includes('@')) {
            emailError = 'invalid email'
        }

        if (emailError) {
            this.setState({ emailError })
            return false
        }

        return true
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            this.setState({
                items: [
                    'Firstname: ', this.state.firstname,<br key={1}/>,
                    'Lastname: ',this.state.lastname,<br key={2}/>,
                    'Email: ', this.state.email,<br key={3}/>,
                    'From: ', this.state.from, ' to: ', this.state.to, <br key={4}/>,
                    'Type: ', this.state.type,<br key={5}/>,
                    'Comment: ', this.state.comment],
                emailError:null
            })
        }
        
    }

    render() {
        const {firstname, lastname, email, from, to, comment, type, items} = this.state
        if (this.state.visibility) {
        return (
            <div>
                <h3 style={{border: '2px solid black'}}>{items}</h3>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick} style={styles.button1}>+</button><br/>
                    <div>
                        Firstname: <input name='firstname' value={firstname} placeholder='firstname' onChange={this.change}/>
                    </div>
                    <div>
                        Lastname: <input name='lastname' value={lastname} placeholder='lastname' onChange={this.change}/>
                    </div>
                    <div>
                        Email: <input name='email' value={email} placeholder='email' onChange={this.change}/>
                        <div style={{fontSize:12 , color:'red'}}>{this.state.emailError}</div>
                    </div>
                    <div>
                        From: <input name='from' value={from} placeholder='datafield' type='number' onChange={this.change}/>
                        to: <input name='to' value={to} placeholder='datafield' type='number' onChange={this.change}/>
                    </div>
                    <div>
                        Type: <select name='type' placeholder='datafield' value={type} onChange={this.change}>
                            <option >select field</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </div>
                    <div>
                        Comment: <br/><textarea name='comment' value={comment} placeholder='comment' onChange={this.change}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
        }else {
            return (
                <div>
                    <h3 style={{border: '2px solid black'}}>{items}</h3>
                    <button onClick={this.handleClick} style={styles.button1}>+</button>
                </div>
            )
        }
    }
}

export default Ccomponent