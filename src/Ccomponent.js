import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createForm} from './redux/actions'
import {createStore} from 'redux'

const inicialState = {
    items: ''
}

function reducer (state, action) {
    switch (action.type) {
        case 'CREATE':
            return {...state, items: action.payload}
        default: return(state)
    }
}

const store = createStore(reducer, inicialState)


class Ccomponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
                firstname: '',
                lastname: '',
                email: '',
                emailError:'',
                from: '',
                to: '',
                comment: '',
                type: '',
                visibility: false,
                items: ['']
        }
    }

    change = (e) => {
        const {name, value} = e.target
        this.setState({ [name]:value})
        this.setState({
            items: [
                this.state.firstname, 
                this.state.lastname, 
                this.state.email,
            ]
        })
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
            
            const changeFirstname = {
                type: 'CREATE',
                payload: this.state.items
            }

            store.dispatch(changeFirstname)
            console.log(store.getState())
            
        }
        
    }
    changeComment = () => {
        this.setState( {
            comment: 'Write your problem here!!!'
        })
    }

    render() {
        if (this.state.visibility) {
        return (
            <div>
                <h3 style={{
                    border: '2px solid black',
                    width: '400px',
                    height: '300px',
                    fontSize: '26px',
                    textAlign: 'center'}}>  Firstname: {store.getState().items[0]}<br/>
                                            Lastname: {store.getState().items[1]}<br/>
                                            Email: {store.getState().items[2]}
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick} style={{float: "right"}}>+</button><br/>
                    <div>
                        Firstname: <input name='firstname' value={this.state.firstname} placeholder='firstname' onChange={this.change}/>
                    </div>
                    <div>
                        Lastname: <input name='lastname' value={this.state.lastname} placeholder='lastname' onChange={this.change}/>
                    </div>
                    <div>
                        Email: <input name='email' value={this.state.email} placeholder='email' onChange={this.change}/>
                        <div style={{fontSize:12 , color:'red'}}>{this.state.emailError}</div>
                    </div>
                    <div>
                        From: <input name='from' value={this.state.from} placeholder='datafield' type='number' onChange={this.change}/>
                        to: <input name='to' value={this.state.to} placeholder='datafield' type='number' onChange={this.change}/>
                    </div>
                    <div>
                        Type: <select name='type' placeholder='datafield' value={this.state.type} onChange={this.change}>
                            <option >select field</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </div>
                    <div style={{fontSize: '16px'}}>
                        <input type="checkbox" onChange={ this.changeComment}/> make report
                    </div>
                    <div>
                        Comment: <br/><textarea name='comment' value={this.state.comment} placeholder='comment' onChange={this.change} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
        }else {
            return (
                <div>
                    <h3 style={
                        {border: '2px solid black',
                        width: '350px',
                        height: '50px',
                        fontSize: '26px',
                        textAlign: 'center'}}>{'Hello'}
                    </h3>
                    <button onClick={this.handleClick} style={{float: "right"}}>+</button>
                </div>
            )
        }
    }
}

const dispatch = {
    createForm
}

export default connect(null, dispatch) (Ccomponent)