import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <ul>
        {this.props.folders.map(folder => {
          return (
            <li key={folder.id}>
              <NavLink
                to={`/note-list/${folder.id}`}
                activeClassName='Sidebar_Selected'
              >
                {folder.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Sidebar;
