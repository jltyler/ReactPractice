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
        showPeople: true,
    };

    constructor(props) {
        super(props);
        console.log('People.constructor()');
    }

    toggleShowPeople = (e) => {
        this.setState({
            showPeople: !this.state.showPeople,
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('People.getDerivedStateFromProps()');
        return null
    }

    removePerson = (index, e) => {
        const peopleCopy = [...this.state.people]
        peopleCopy.splice(index, 1)
        this.setState({
            people: peopleCopy,
        })
    }

    changeName = (index, e) => {
        const peopleCopy = [...this.state.people]
        const personCopy = {...peopleCopy[index]}
        personCopy.name = e.target.value
        peopleCopy.splice(index, 1, personCopy)
        this.setState({
            people: peopleCopy,
        })
    }

    render() {
        console.log('People.render()');
        return (
            <div className="people">
            <ToggleButton clickHandler={this.toggleShowPeople} text={['Hide that nonsense!', 'Show me the money!']} status={this.state.showPeople} />
            { (this.state.showPeople ? this.state.people.map((p, i) => (
                <Person name={p.name} title={p.title} key={'person'+i} deleteHandler={this.removePerson.bind(this, i)} textChange={this.changeName.bind(this, i)} />
            )) : '')}
            </div>
        );
    }

    componentDidMount() {
        console.log('People.componentDidMount()');
    }
}

export default People;