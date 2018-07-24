import React from 'react';
import './Person.css';
import Common from '../common'

const printChilluns = (props) => {
    console.log("props.children:", props.children)
};

const names = [
    "Jar Jar",
    "Gronkle",
    "Skreee",
    "Nonu",
    "Mantis Tobbogan"
];

const titles = [
    "Mumbling Monkey",
    "Madcap Maniac",
    "Bashful Beast",
    "Violet Viper",
    "Featherbrained Flamingo",
    "Thieving Thornbearer",
    "Sordid Simpleton"
];

const tags = [
    "A donkey! A donkey! My kingdom for a donkey!",
    "Boiled denims and jean shorts.",
    "Interferometric. Pulse.",
    "Return to the sauce"
]

class Person extends React.Component {

    state = {
        name: "Marth",
        title: "Mumblin Monkey Maniac",
        tag: ""
    }

    changeName = () => {
        this.setState({
            name: Common.choice(names),
            title: Common.choice(titles),
            tag: Common.choice(tags),
        });
    }

    render() {
        return (
            <div>
                <h2>Classy</h2>
        <p className="sith">Darth <span className="name">{this.state.name}</span> {Common.choice(['the', 'a', 'some'])} <span className="title">{this.state.title}</span></p>
        {this.props.children && <p className="tall">{this.props.children}</p>}
        {(this.state.tag && this.state.tag != '') && <p>{this.state.tag}</p>}
        <button onClick={this.changeName}>Change name</button>
        </div>
        );
    }
}

export default Person;