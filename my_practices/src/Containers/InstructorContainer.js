import React from 'react';
import Instructor from '../components/Instructor'




function InstructorContainer(props) {

 const instructors_names = [{ id: 1, name: "Tashawn" }, { id: 2, name: "greg" }, { id: 3, name: "Steven" }, { id: 4, name: "Ian" }]

 let instructors = instructors_names.map(instructorObject => <Instructor key={instructorObject.id} instructor={instructorObject} appClickHandler={props.appClickHandler} />)
 //this instructor singular should match the instructor component see line 3 instructor.js 
 return (
  <>
   { instructors}
  </>
 )


}
export default InstructorContainer