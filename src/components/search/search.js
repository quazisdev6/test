import React from "react"
import { kebabCase } from "lodash";
import { navigate } from "gatsby";
import "./search.css"

export default class Search extends React.Component {

  state = {
    searchValue: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    navigate(`/tags/${kebabCase(this.state.searchValue)}/`)
  }

  render() {
    return (

        <div className="p-1 bg-light rounded shadow-sm mb-4">
          <form className="input-group" onSubmit={this.handleSubmit}>
            <input type="text"
                   name="searchValue"
                   value={this.state.searchValue}
                   onChange={this.handleInputChange} placeholder="What're you searching for?"
                   aria-describedby="button-addon1"
                   className="form-control border-0 bg-light"/>
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link text-primary">
                  <i className="mdi mdi-search-web"></i>
                </button>
              </div>
            </form>
        </div>
    )
  }
}