import React from 'react';
import './HelloComponent.css';

class HelloComponentStatefull extends React.Component {
    // render() adalah fungsi yang akan dipanggil pertama kali
    render() {
        return <p>Hello from <strong>'HelloComponentStatefull'</strong> external <strong className="text-danger">'statefull'</strong> component</p>
    }
}

// Untuk component 'HelloComponentWithArrow' agar bisa digunakan dimana saja, maka digunakan 'export'
export default HelloComponentStatefull;