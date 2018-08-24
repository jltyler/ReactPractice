import React, {Component} from 'react';
import Person from './Person'
import ToggleButton from './ToggleButton';
import './Person.css';

const peopleTestData = [
    {name: 'Megaman', title: 'Super Fighting Robot'},
    {name: 'Data', title: 'More human than any of us'},
    {name: 'Amos', title: 'That Guy'},
    {name: 'Garthpetersans', title: 'Living in a Society'},
    {name: 'Cackletta', title: 'That one laser eye attack'},
];

class People extends Component {
    state = {
        people: peopleTestData,
        showPeople: false,
    };

    toggleShowPeople = (e) => {
        this.setState((prevState, props) => ({
            showPeople: !prevState.showPeople,
        }));
    }

    changeName = (index, e) => {
        // Put newName in closure since event will not stick around for long enough
        const newName = e.target.value;
        this.setState((prevState, props) => {
            const peopleCopy = [...prevState.people];
            const personCopy = {...peopleCopy[index]};
            personCopy.name = newName;
            peopleCopy.splice(index, 1, personCopy)
            return {
                people: peopleCopy,
            }
        })
    }

    render() {
        const rando = Math.floor(Math.random() * this.state.people.length);
        return (
            <div className="people">
            <ToggleButton clickHandler={this.toggleShowPeople} text={['Hide that nonsense!', 'Show me the money!']} status={this.state.showPeople} />
            { (this.state.showPeople ? this.state.people.map((p, i) => (
                <Person focus={(i === rando)} name={p.name} title={p.title} key={i} textChange={this.changeName.bind(this, i)}/>
            )) : '')}
            </div>
        );
    }
}

export default People;