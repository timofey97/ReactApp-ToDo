import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';


// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 26
//         }
//     }
//     nextYear() {
//         console.log(1);
//         this.setState(state => ({years: ++state.years}))
//     }
//     render() {
//         const {name, surname,link} =this.props;
//         const {years} = this.state;
//         return (
//         <>
//             <button onClick={this.nextYear}>++</button>
//             <h1>Myname is {name}, surname - {surname}, years = {years}</h1>
//             <a href={link}>My profile</a>
//         </>
//     )
//     }
// }

// const All = () => {
//     return (
//         <>
//             <WhoAmI name="Jone" surname="Smith" link="facebook.com"/>
//             <WhoAmI name="Tim" surname="Smith" link="facebook.com"/>
//             <WhoAmI name="Alex" surname="Smith" link="facebook.com"/>
//         </>
//     )
// }

ReactDOM.render( < App / > , document.getElementById('root'));


{/* var list = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
];

(function re1() {
    const d = {};
    for (let b of list) {
        const [mas, q] = Object.values(b);
        d[mas]= q;
    }
    console.log(d);    
})();

(function re2() {console.log(list.reduce((acc, n) => (acc[n.name] = n.value; return acc;), {}));})();

(function re3() {console.log(Object.fromEntries(list.map(n => [ n.name, n.value])));})(); */}