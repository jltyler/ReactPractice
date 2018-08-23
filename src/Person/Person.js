import React, {Component} from 'react';
import './Person.css';

// If, for whatever reason, you cannot use a wrapping div or some other html object,
// and you cannot use key props to return a list of adjacent elements,
// you can use a "higher-order component" which simply returns the children
// This is particularily helpful if having a div fouls up the styling on the page
const Namecard = (props) => props.children;

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
            <Namecard>
                <h2>Darth <span className="name">{this.props.name}</span></h2>
                <h3 className="title">{this.props.title}</h3>
                {this.props.children && <p>{this.props.children}</p>}
                {this.props.textChange && <input type="text" onChange={this.props.textChange} value={this.props.name} />}
                <br />
                {this.props.deleteHandler && <button onClick={this.props.deleteHandler}>Remove this person!</button>}
            </Namecard>
        );

    }

    componentWillUnmount() {
        console.log('Person.componentWillUnmount()');

    }
}

export default Person;