import React, { Component } from 'react';
import {CategoryMenu} from '../Category/CategoryMenu.js'
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <div className="input-group md-form form-sm form-1 pl-0">
          <input id="searchInp" className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" value=""/>
          <NavLink type="button" className="btn bg-info text-white" tag={Link} to="/tovarsList">Search</NavLink>
        </div>
          <CategoryMenu></CategoryMenu>
      </div>
    );
  }
}
