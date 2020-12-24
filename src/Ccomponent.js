import React, { Component } from 'react'

export default class Ccomponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            firstname: '',
            lastname: '',
            items: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
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
            items: [...this.state.items, this.state.firstname, this.state.lastname]
        })
    }

    render() {
        return (
            <div>
            <ul>
                    {this.state.items.map((item, index) =>(
                        <li key={index}>{item}</li>
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
