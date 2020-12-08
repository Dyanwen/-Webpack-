// import createHeading from './js/heading.js';
import './css/main.css'
// import about from './about.md';

// import './js/editor.js'
// console.log(about);
// const h = createHeading();
// document.body.appendChild(h);


// if (module.hot) {
//     module.hot.accept('./js/heading.js', _ => {
//         console.log('heading updated')
//     })
// }

// import { Button } from './js/component.js'
// import { Button } from './components'
// document.querySelector('main').appendChild(Button());

// import React from 'react';
// import ReactDOM from "react-dom";
// class App extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <h1 className="title">I am the title</h1>
//                 <h1 className="title">I am the title</h1>
//                 <h1 className="title">I am the title</h1>
//                 <p className="content">I am the content</p>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<App />, document.getElementById('app'));

import Vue from 'vue';
// import Loading from './components/loading.vue'
// import Tree from './components/tree/tree.vue'
import cssEfect from './components/cssEfect/index.vue'

// const v = new Vue({
//     el:"#app",
//     render: h => h(cssEfect)
// })
new Vue({
    el: '#app',
    render: h => h(cssEfect)
})

// async function getComponent() {
//     // return import(/* webpackChunkName: "lodash" */'lodash').then(_ => {
//     //     var element = document.createElement('div');
//     //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     //     return element;
//     // }).catch(error => 'An error occurred while loading the component');

//     var element = document.createElement('div');
//     const _ = await import(/* webpackChunkName: "lodash" */ 'lodash-es');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
// }
// getComponent().then(component => {
//     document.body.appendChild(component);
// })

console.log(API_BASE_URL);