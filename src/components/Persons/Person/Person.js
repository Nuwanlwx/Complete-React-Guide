import React, {Component} from 'react';
// import Radium from 'radium'
import PropTypes from 'prop-types';
import withClass from "../../../hoc/withClass";
import Auxiliary from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';
import classes from './Person.css';

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();

    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Persons.js rendering .. ]');
        return (
            <Auxiliary>
                <AuthContext.Consumer>
                    {(context)=>context.authenticated?<p>Authenticated!</p>:<p>Please log in</p>}
                </AuthContext.Consumer>
                {/*<div className="Person" style={style}>*/}
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input key="i3"
                       // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                       type="text" onChange={this.props.changed} value={this.props.name} />

            </Auxiliary>
        );
    }
}

// export default Radium(person);
// Person.prototype = {
//     click:PropTypes.func,
//     name: PropTypes.string,
//     age:PropTypes.number,
//     changed:PropTypes.func
// }
export default withClass(Person,classes.Person);
