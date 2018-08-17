import React, { Component } from 'react';

export default class List extends Component{

    render() {
        const people = this.props.people;
        return (
            <div>{people.map((p)=>{
                console.log(p);
            })}</div>
        );
    }
}
