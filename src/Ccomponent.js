import React, { Component } from 'react'

export default class Ccomponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            firstname: '',
            lastname: '',
            items_firstname: [],
            items_lastname: [],
            visibility: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        
    }
    
    handleChange(event) {
        this.setState({
            firstname:event.target.value
        })
    }
    handleChange2(event) {
        this.setState({
            lastname:event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            items_firstname: [...this.state.items_firstname, this.state.firstname],
            items_lastname: [...this.state.items_lastname, this.state.lastname]
        })
    }
    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                <ul>
                    {this.state.items_firstname.map((item, index) =>(
                        <li key={index}>Firstname: {item}</li>
                    ))}
                    {this.state.items_lastname.map((item, index) =>(
                        <li key={index}>Lastname: {item}</li>
                    ))}
                </ul>
            <form onSubmit={this.handleSubmit}>
                Firstname:<input value={this.state.firstname} onChange= {this.handleChange}/>
                <br/>
                Lastname:<input value={this.state.lastname} onChange= {this.handleChange2}/> 
                <button type="submit">Submit</button> 
            </form>
            </div>
        )
    }
}
