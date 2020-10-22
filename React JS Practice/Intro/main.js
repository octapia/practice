class App extends React.Component{
    render(){
        return React.createElement('div',null,'Hello WOrld !')
    }
}

ReactDOM.render(React.createElement(App,null),document.getElementById('root'))