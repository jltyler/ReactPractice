import React from 'react';
import './Person.css';
import PropTypes from 'prop-types';

class Person extends React.Component {
    render() {
        const x = (
            <div className="namecard" >
                <h2>Darth <span className="name">{this.props.name}</span></h2>
                <h3 className="title">{this.props.title}</h3>
                {this.props.children && <p>{this.props.children}</p>}
                {this.props.textChange && <input type="text" onChange={this.props.textChange} value={this.props.name} />}
            </div>
        );
        return x
    }

}

Person.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
};

export default Person;