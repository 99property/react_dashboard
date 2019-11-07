import React, { Component } from 'react'

export default class sidebar extends Component {
    render() {
        return (
       <React.Fragment>
            <div className="large-2 columns sidebar">
			  <h2>Sidebar</h2>
			  <ul>
			    <li>Link 1</li>
			    <li>Link 2</li>
			    <li>Link 3</li>
			    <li>Link 4</li>
			    <li>Link 5</li>
			  </ul>
			</div>
      </React.Fragment>  
        )
    }
}
