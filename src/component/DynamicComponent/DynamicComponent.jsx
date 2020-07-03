import React from 'react';
import './DynamicComponent.css';

const DynamicComponent = (props) => {
    return <div className="content-wrapper">
        <span className="number">{props.id}</span>
        <p><span>Name</span>{props.name}</p>
        <p><span>Company</span>{props.company}</p>
        <p><span>Position/Job</span>{props.job}</p>
    </div>
}

DynamicComponent.defaultProps = {
    name: "Hamba Allah"
}

// Untuk component 'DynamicComponent' agar bisa digunakan dimana saja, maka digunakan 'export'
export default DynamicComponent;
