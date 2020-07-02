import React from 'react';
import DynamicComponent from '../component/DynamicComponent/DynamicComponent';

class Home extends React.Component {
    // render() adalah fungsi yang akan dipanggil pertama kali
    render() {
        return <div>
            <div style={{ paddingLeft: "15px" }}>
                <h3>Home</h3>
                <p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.</p>
            </div>
            <div style={{ display: "inline-block", paddingLeft: "15px" }}>
                <DynamicComponent name="N'golo Kante" company="PT Visionet Data Internasional" job="Software Engineer: Web Front-end Designer Developer" />
                <DynamicComponent name="Timeoue Bakayoko" company="PT Multipolar Technology Tbk" job="Software Engineer: Web Front-end Designer Developer" />
                <DynamicComponent name="Raheem Sterling" company="PT Sigma Cipta Raka" job="Software Engineer: Web Front-end Designer Developer" />
                <DynamicComponent name="Andrea Onana" company="PT Mitrais" job="Software Engineer: Web Front-end Designer Developer" />
                <DynamicComponent company="PT Geekseat Indonesia" job="Software Engineer: Web Front-end Designer Developer" />
                <DynamicComponent name="Phil Jones" company="PT Electrical Data Interchange" job="Software Engineer: Web Front-end Designer Developer" />
            </div>
        </div>
        
    }
}

// Untuk component 'Home' agar bisa digunakan dimana saja, maka digunakan 'export'
export default Home;