import React from "react"

function Form() {
 return (

  <form onSubmit={(e) => {
   e.preventDefault()
   let name = e.target[0].value
   console.log(name)
  }}
  >
   <input type="text" placeholder="Enter instructor name" />
   <input type="submit" value="create instructor" />
  </form>

 )

}
export default Form