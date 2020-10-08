import React from 'react';
import Instructor from '../components/Instructor'
import Form from '../components/Form'




class InstructorContainer extends React.Component {
 state = {
  instructors: [{ id: 1, name: "Tashawn", mod: 4 }, { id: 2, name: "greg", mod: 2 }, { id: 3, name: "Steven", mod: 3 }, { id: 4, name: "Ian", mod: 1 }]
 }



 submitHandler = (element) => {
  // create a copy of the arrray api
  let myArray = [...this.state.instructors, element]
  console.log('old state:', this.state.instructors)

  this.setState({ instructors: myArray })

 }



 render() {

  let instructors = this.state.instructors.map(instructorObject => <Instructor key={instructorObject.id} instructor={instructorObject} appClickHandler={this.props.appClickHandler} />)
  //this instructor singular should match the instructor component see line 3 instructor.js 
  return (
   <>
    <Form submitHandler={this.submitHandler} />
    { instructors}
   </>
  )
 }


}
export default InstructorContainer