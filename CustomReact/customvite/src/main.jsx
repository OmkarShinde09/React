import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Yashada Khilari"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //<MyApp/>
    //anotherElement
    // reactElement
    //MyApp() //Do not write like this. Just to understand that what react is doing is it that it renders a function.
    <App />

)
