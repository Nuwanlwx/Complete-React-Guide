import React, { Component } from 'react';

import  classes from './App.css';
// import Radium,{StyleRoot}  from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import  withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

  }
  state = {
    persons: [
      {id: 1,name: 'Max', age: 28 },
      {id: 2, name: 'Manu', age: 29 },
      {id: 3,name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }
  static  getDerivedStateFromProps(props,state){
    console.log('[App.js getDerivedStateFromProps ]',props);
    return state;
  }
  // componentWillMount() {
  //   console.log('[App.js componentWillMount ]')
  // }

  componentDidMount() {
    console.log('[App.js componentDidMount ]')
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const  person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const  persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
      });
  }
  deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
   this.setState({persons: persons})
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow });
  }
  render () {
    console.log('[App.js render ]');
    let persons = null;

    if(this.state.showPersons){
      persons = (
            <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>

      );

    }

    return (
        // <StyleRoot>
          <Auxiliary className={classes.App}>
            <button onClick={()=>{
              this.setState({showCockpit : false});
            }}>Remove cockpit
            </button>
            {this.state.showCockpit ? (
                <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}/>
            ):null}
            {persons}
          </Auxiliary>
        // </StyleRoot>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App);
export default withClass(App, classes.App);
