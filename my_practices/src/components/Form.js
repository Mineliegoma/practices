import React from "react"

class Form extends React.Component {

 state = {
  name: "",
  mod: ""
 }
 changeHandler = (e) => {
  console.log('events:', e.target.value)
  if (e.target.name == "name") {
   this.setState({ name: e.target.value })
  } else {
   this.setState({ mod: e.target.value })
  }
 }


 render() {
  return (

   <form onSubmit={(e) => {
    e.preventDefault()
    this.props.submitHandler({ name: e.target[0].value })
    this.setState({ name: "", mod: "" })

    //console.log(name)
   }}
   >
    <input type="text" name="name" placeholder="Enter instructor name" value={this.state.name} onChange={this.changeHandler} />
    <input type="number" name="mod" placeholder="Enter instructor mod" value={this.state.mod} onChange={this.changeHandler} />

    <input type="submit" value="create instructor" />
   </form>

  )
 }

}
export default Form