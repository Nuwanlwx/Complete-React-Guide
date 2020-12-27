import React, {Component} from 'react';
// import Radium from 'radium'
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.css';

class Person extends Component{
    render() {
        console.log('[Persons.js rendering .. ]');
        return (
            <React.Fragment>
                {/*<div className="Person" style={style}>*/}

                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />

            </React.Fragment>
        );
    }
}

// export default Radium(person);
export default Person;
