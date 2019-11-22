import React from "react";
import student from "./data";
import Bottom from "./Bottom";
import "./info.css"

class Info extends React.Component{
    constructor(){
        super();

        this.state = {
            data: student,
            i: 0
        } 
    }

    goForward = () => {
        if(this.state.i < 24){
          this.setState({i: this.state.i + 1}) 
        } else {
            this.setState({i: 0});
        }
         
    }

    goBack = () => {
        if(this.state.i > 0){
            this.setState({i: this.state.i - 1})
        } else {
            this.setState({i: 24})
        }
    }

    

    render(){ 

        return(
            <div>
                <div className="white-box">
                <h1>{this.state.data[this.state.i].name.first + " " + this.state.data[this.state.i].name.last}</h1> <h1 className="index">{this.state.i + 1}/25</h1>
                <p>From: {this.state.data[this.state.i].city + ", " + this.state.data[this.state.i].country}</p>
                <p>Job Title: {this.state.data[this.state.i].title}</p>
                <p>Employer: {this.state.data[this.state.i].employer}</p>
                <p>Favorite Movies:
                    <li>{this.state.data[this.state.i].favoriteMovies[0]}</li>
                    <li>{this.state.data[this.state.i].favoriteMovies[1]}</li>
                    <li>{this.state.data[this.state.i].favoriteMovies[2]}</li>
                </p>

                </div>
                <div className="buttons">
                    <button onClick={this.goBack}>{'<'}Previous</button>
                    <button onClick={this.goForward}>{'>'}Next</button>
                    
                </div>
            </div>
            

            
        )
    }
}


export default Info