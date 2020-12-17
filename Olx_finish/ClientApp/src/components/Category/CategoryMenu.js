import React, { Component } from 'react';

export class CategoryMenu extends Component{
    render(){
    return(
        
        <div className="d-flex justify-content-center">
            <div className="col-3 bg-info mr-1 mt-2 rounded">
                <img src="posluga.png" alt="image"></img>
                <p>Name categoria</p>
            </div>
            <div className="col-3 bg-info mr-1 mt-2 rounded">
                <img src="posluga.png" alt="image"></img>
                <p>Name categoria</p>
            </div>
            <div className="col-3 bg-info mr-1 mt-2 rounded" >
                <img src="posluga.png" alt="image"></img>
                <p>Name categoria</p>
            </div>
            <div className="col-3 bg-info mr-1 mt-2 rounded">
                <img src="posluga.png" alt="image"></img>
                <p>Name categoria</p>
            </div>
        </div>
    )}
}