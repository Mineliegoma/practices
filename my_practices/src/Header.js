import React from 'react';
import Bline from './Bline'


// function Header() {
//  return <h1>Welcome to our App</h1>


// }
class Header extends React.Component {
 // EX4,EX5
 // think of it as initialize in ruby, its a method that will run first every single time an instance of this classe is being create 
 // if there is any code that you want to render before anything else you should put it inside the constructor
 // constructor(props) {
 //  super(props)
 //  this.state = { color: "violet" } // im creating an object that i will use inside of this componant to manage its state 
 //  //console.log("console log in constructor")

 // }
 //another way to do this is to create, this is ex6 
 state = { color: "red" }
 instructors = () => {
  return this.props.instructors.map(function (instructor_name) { return <Bline name={instructor_name} /> })
 }
 render() {
  console.log("console log in render method:", this.state)
  return (
   <div>
    <h1 style={{ "border-style": "dashed", "border-color": `${this.state.color}` }}> Welcome to our app</h1>
    {this.instructors()}

   </div>


  )
 }
}
export default Header
