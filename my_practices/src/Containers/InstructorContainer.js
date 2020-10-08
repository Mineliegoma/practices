import React from 'react';
import Instructor from '../components/Instructor'
import Form from '../components/Form'
import SearchForm from '../components/SearchForm'




class InstructorContainer extends React.Component {
 state = {
  instructors: [{ id: 1, name: "Tashawn", mod: 4 }, { id: 2, name: "greg", mod: 2 }, { id: 3, name: "Steven", mod: 3 }, { id: 4, name: "Ian", mod: 1 }],
  filteredInstructors: [{ id: 1, name: "Tashawn", mod: 4 }, { id: 2, name: "greg", mod: 2 }, { id: 3, name: "Steven", mod: 3 }, { id: 4, name: "Ian", mod: 1 }],
  searchValue: ""
 }


 searchHandler = (e) => {
  console.log(e.target.value)
  let myArray = this.state.filteredInstructors.filter(inst => inst.name.toLowerCase().includes(e.target.value.toLowerCase()))
  this.setState({ filteredInstructors: myArray, searchValue: e.target.value })
  console.log(myArray)
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
    <SearchForm searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
    { instructors}
   </>
  )
 }


}
export default InstructorContainer