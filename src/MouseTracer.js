import React, { Component } from 'react'

export default class MouseTracer extends React.Component {
    state = {
        x : null,
        y : null,
    };

    onMouseMove = e =>{
        this.setState({
            x : e.clientX,
            y : e.clientY,
        });
    };

    render() {
        const { x, y} = this.state;

        return (

        <div style={{height:"100vh", width:"100vw"}} onMouseMove={this.onMouseMove}><p>{`(x,y): (${x}, ${y})`}</p> </div>
        )
    }
}

