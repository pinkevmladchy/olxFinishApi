import React, { Component } from 'react';

export class TovarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tovars: []
        };
    }
    
    componentDidMount() {
        fetch('https://localhost:44318/api/Olx/TovarSearch&Request="iPhone"')
        .then(response => response.json())
        .then(tovars => {
            console.log('---server reesponse---', tovars);
            this.setState({ tovars: tovars })
             });
    } 

    render () {
    const tovars = this.state.tovars;
    const listItems = tovars.map((tov) => {
            const El = <>
                        <div className="row">
                            <div className="col-2">
                                <img className="img-thumbnail" src="./photo/phone.png" alt="qwerty"/>
                            </div>  
                            <div className="col-10">
                                <h3>{tov.name}</h3>
                                <p>{tov.user.city}</p>
                            </div>
                        </div>
                        <hr></hr>
                        </>
            return El; 
        }
    );
    return (
        <>
            <div className="row">
               {listItems}
            </div>
        </>
    );
  }
}