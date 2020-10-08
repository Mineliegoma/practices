import React from 'react';
import Instructor from '../components/Instructor'
import Form from '../components/Form'




class InstructorContainer extends React.Component {

 instructors_names = () => [{ id: 1, name: "Tashawn" }, { id: 2, name: "greg" }, { id: 3, name: "Steven" }, { id: 4, name: "Ian" }]


 render() {

  let instructors = this.instructors_names().map(instructorObject => <Instructor key={instructorObject.id} instructor={instructorObject} appClickHandler={this.props.appClickHandler} />)
  //this instructor singular should match the instructor component see line 3 instructor.js 
  return (
   <>
    <Form />
    { instructors}
   </>
  )
 }


}
export default InstructorContainer