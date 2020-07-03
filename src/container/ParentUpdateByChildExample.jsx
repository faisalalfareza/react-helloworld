import React, { Component, Fragment } from 'react';
import '../component/DynamicComponent/DynamicComponent.css';
import CardComponent from '../component/CardComponent/CardComponent';

class ParentUpdateByChildExample extends React.Component {
    state = {
        order: 4
    }

    handleCounterChange = (newCounterValue) => {
        this.setState({
            order: newCounterValue
        });
    }

    render() {
        return (
            <Fragment>
                <div style={{ paddingLeft: "15px" }}>
                    <h3>Parent Update By Child</h3>
                    <p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.</p>
                </div>
                <div style={{ paddingLeft: "15px" }}>
                    <div className="header">
                        <span className="title">1. Header as Parent</span>
                        <span className="number">{this.state.order}</span>
                    </div>
                    
                    <CardComponent onCounterChange={(value) => this.handleCounterChange(value) } />
                </div>
            </Fragment>
        )
    }
}

// Untuk component 'ParentUpdateByChildExample' agar bisa digunakan dimana saja, maka digunakan 'export'
export default ParentUpdateByChildExample;
