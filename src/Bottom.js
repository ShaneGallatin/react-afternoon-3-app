import React from "react";
import "./Bottom.css";

class Bottom extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }


    }

    addOne = () => {
        let val = this.props.i;
        return val += 1
        
    }

    render(){
        return(
            <div>
                bottom
            </div>


        );
    }
}

export default Bottom