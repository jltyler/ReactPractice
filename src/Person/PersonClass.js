import React from 'react';
import './Person.css';
import Common from '../common'

const printChilluns = (props) => {
    console.log("props.children:", props.children)
}

class Person extends React.Component {

    state = {
        name: "Marth",
        title: "Mumblin Monkey Maniac"
    }

    changeName = () => {
        this.setState({
            name: Common.choice(["Jar Jar", "Gronkle", "Skreee", "Nonu", "Mantis Tobbogan M.D."])
        })
    }

    render() {
        return (
            <div>
                <h2>Classy</h2>
        <p className="sith">Darth <span className="name">{this. state.name}</span> {Common.choice(['the', 'a', 'some'])} <span className="title">{this. state.title}</span></p>
        {this.props.children && <p className="tall">{this.props.children}</p>}
        <button onClick={this.changeName}>Change name</button>
        </div>
        )
    }
}

export default Person;