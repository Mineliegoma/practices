import React from "react"
function SearchForm(props) {
 return (
  <form>
   <input placeholder="search for instructor" value={props.searchValue} onChange={props.searchHandler} />
  </form>

 )
}
export default SearchForm