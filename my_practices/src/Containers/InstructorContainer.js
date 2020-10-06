import React from 'react';
import Instructor from '../components/Instructor'




function InstructorContainer(props) {
 let instructors = props.instructors.map(instructorObject => <Instructor instructor={instructorObject} />)
 //this instructor singular should match the instructor component see line 3 instructor.js 
 return (
  <>
   { instructors}
  </>
 )


}
export default InstructorContainer