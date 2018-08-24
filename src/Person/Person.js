import React from 'react';
import './Person.css';

class Person extends React.Component {
    inputElement = React.createRef()
    
    componentDidMount() {
        if (this.props.focus)
            this.inputElement.current.focus();
    }

    render() {
        const x = (
            <div className="namecard" >
                <h2>Darth <span className="name">{this.props.name}</span></h2>
                <h3 className="title">{this.props.title}</h3>
                {this.props.children && <p>{this.props.children}</p>}
                {this.props.textChange && <input type="text" onChange={this.props.textChange} value={this.props.name} ref={this.inputElement} />}
            </div>
        );
        return x
    }


}

export default Person;