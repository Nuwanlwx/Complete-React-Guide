import React ,{useEffect, useRef}from 'react';
import  classes from './Cockpit.css'
const  cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http req..
        // const timer = setTimeout(()=>{
        //     alert('Saved data to the cloud!')
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]);
    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd  useEffect');
        }
    });
    let assignedClasses = [];
    let  btnClass ='';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.personsLength<= 2){
        assignedClasses.push(classes.red)
    }
    if(props.personsLength<=1){
        assignedClasses.push(classes.bold);
    }
    return(
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className= {btnClass}
                onClick={props.clicked}>Toggle persons
            </button>
        </div>
    );
}
export  default  React.memo(cockpit) ;
