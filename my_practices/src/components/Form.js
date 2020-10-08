import React from "react"

class Form extends React.Component {

 state = {
  name: ""
 }
 changeHandler = (e) => {
  //console.log('events:', e.target.value)
  this.setState({ name: e.target.value })

 }

 render() {
  return (

   <form onSubmit={(e) => {
    e.preventDefault()
    this.props.submitHandler({ name: e.target[0].value })
    //console.log(name)
   }}
   >
    <input type="text" placeholder="Enter instructor name" value={this.state.name} onChange={this.changeHandler} />
    <input type="submit" value="create instructor" />
   </form>

  )
 }

}
export default Form