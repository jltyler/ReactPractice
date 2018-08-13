import React, {Component} from 'react';
import './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('Person.constructor()');
    }

    componentWillMount() {
        console.log('Person.componentWillMount()');
    }

    render() {
        console.log('Person.render()');
        return (
            <div className="namecard" >
                <h2>Darth <span className="name">{this.props.name}</span></h2>
                <h3 className="title">{this.props.title}</h3>
                {this.props.children && <p>{this.props.children}</p>}
                {this.props.textChange && <input type="text" onChange={this.props.textChange} value={this.props.name} />}
            </div>
        );

    }

    componentDidMount() {
        console.log('Person.componentDidMount()');
    }
}

export default Person;