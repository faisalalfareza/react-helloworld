import React, { Component, Fragment } from 'react';
import '../DynamicComponent/DynamicComponent.css';

class CardComponent extends React.Component {
    state = {
        order: 4
    }

    handlePLus = () => {
        this.setState({
            order: (this.state.order + 1)
        }, () => {
            this.handleCounterChange();
        });
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: (this.state.order - 1)
            }, () => { 
                this.handleCounterChange();
            });
        }
    }

    handleCounterChange = () => {
        this.props.onCounterChange(this.state.order);
    }

    render() {
        return (
            <div style={{ paddingLeft: "15px" }}>
                <div className="card">
                    <div className="card-banner">
                        <img src="https://lh3.googleusercontent.com/proxy/JDUFwYmTjohQamUVAt-fXsHXpkMWXwPtz4xg4shW5qRryAZNk1PyX8FwERtAAez7H2HRdKkN59H3lQ8lmj-Ej_58kgSm7-zLmtn6-K4Mz0m7cY5po9a2Ib5bmWfH95NGCBBjtG8a3Qt8U71hrAgSYd4"></img>
                    </div>
                    <div className="card-content">
                        <span className="number">2. Card as Content/Child</span>
                        <p><span>Name</span>Faisal Alfareza</p>
                        <p><span>Company</span>PT Visionet Data Internasional</p>
                        <p><span>Position/Job</span>Software Engineer: Web Front-end Designer Developer</p>
                    </div>
                    <div className="card-counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="number" value={this.state.order}></input>
                        <button className="plus" onClick={this.handlePLus}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

// Untuk component 'CardComponent' agar bisa digunakan dimana saja, maka digunakan 'export'
export default CardComponent;
