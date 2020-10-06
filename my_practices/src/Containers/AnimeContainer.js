import React from 'react';
import Instructor from '../components/Instructor'

function AnimeContainer(props) {
 console.log("props in anime container")
 //let instructors = props.instructors.map(instructorObject => <Instructor instructor={instructorObject} />)
 //this prop name instructor should be the asme as the one in instructor component, because they rendering the same thing
 return (
  <>
   <h1>Anime container</h1>
   <Instructor instructor={props.instructor} />

  </>
 )
}
export default AnimeContainer