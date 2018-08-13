import React, {Component} from 'react';
import './Person.css';

class Person extends Component {

    state = {
        name: 'unknown',
    }

    constructor(props) {
        super(props);
        console.log('Person.constructor()');
    }

    componentDidMount() {
        console.log('Person.componentDidMount()');
        // Run async fetches or immediate state changes here
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Person.getDerivedStateFromProps()');
        return {
            name: props.name,
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Person.getSnapshotBeforeUpdate()');
        return "Kashmoney"
    }

    shouldComponentUpdate() {
        console.log('Person.shouldComponentUpdate()');
        return (Math.random() < .8 ? true : false )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Person.componentDidUpate()');
    }

    render() {
        console.log('Person.render()');
        return (
            <div className="namecard" >
                <h2>Darth <span className="name">{this.props.name}</span></h2>
                <h3 className="title">{this.props.title}</h3>
                {this.props.children && <p>{this.props.children}</p>}
                {this.props.textChange && <input type="text" onChange={this.props.textChange} value={this.props.name} />}
                <br />
                {this.props.deleteHandler && <button onClick={this.props.deleteHandler}>Remove this person!</button>}
            </div>
        );

    }

    componentWillUnmount() {
        console.log('Person.componentWillUnmount()');

    }
}

export default Person;