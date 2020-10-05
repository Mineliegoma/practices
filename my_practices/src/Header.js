import React from 'react';
import Bline from './Bline'


// function Header() {
//  return <h1>Welcome to our App</h1>


// }
class Header extends React.Component {
 instructors = () => {
  return this.props.instructors.map(function (instructor_name) { return <Bline name={instructor_name} /> })
 }
 render() {
  return (
   <div>
    <h1> Welcome to our app</h1>
    {this.instructors()}

   </div>


  )
 }
}
export default Header
