import React from 'react';
import DynamicComponent from '../component/DynamicComponent/DynamicComponent';
import ParentUpdateByChildExample from '../container/ParentUpdateByChildExample';

class DynamicDataExample extends React.Component {
    state = {
        personals: [
            { id: 1, name: "N'golo Kante", company: "PT Visionet Data Internasional", job: "Software Engineer: Web Front-end Designer Developer" },
            { id: 2, name: "Timeoue Bakayoko", company: "PT Multipolar Technology Tbk", job: "Software Engineer: Web Front-end Designer Developer" },
            { id: 3, name: "Raheem Sterling", company: "PT Sigma Cipta Raka", job: "Software Engineer: Web Front-end Designer Developer" },
            { id: 4, name: "Andrea Onana", company: "PT Mitrais", job: "Software Engineer: Web Front-end Designer Developer" },
            { id: 5, company: "PT Geekseat Indonesia", job: "Software Engineer: Web Front-end Designer Developer" },
            { id: 6, name: "Phil Jones", company: "PT Electrical Data Interchange", job: "Software Engineer: Web Front-end Designer Developer" }
        ]
    };

    // render() adalah fungsi yang akan dipanggil pertama kali
    render() {
        return <div>
            <div style={{ paddingLeft: "15px" }}>
                <h3>Dynamic Data Example</h3>
                <p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.</p>
            </div>
            <div style={{ display: "inline-block", paddingLeft: "15px" }}>
                {this.state.personals.map(personal => (<DynamicComponent id={personal.id} name={personal.name} company={personal.company} job={personal.job} />))}
            </div>

            <ParentUpdateByChildExample />
        </div>

    }
}

// Untuk component 'DynamicDataExample' agar bisa digunakan dimana saja, maka digunakan 'export'
export default DynamicDataExample;