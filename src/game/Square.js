import React from 'react';
class Square extends React.Component
{   
    
    render(){

        const style = {
            background: "lightblue",
            border: "2px solid darkblue",
            fontSize: "40px",
            fontWeight: "800",
            cursor: "pointer",
            outline: "none",
            width:"100px",
            height:"100px",
            margin:"5px"             
        };

        return (
            <button style={style} className="square" onClick={()=>this.props.onClick()} disabled={this.props.value}>
                {this.props.value}
            </button>

        );
    }
}

export default Square;