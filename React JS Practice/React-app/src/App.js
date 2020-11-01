import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

App.propTypes = {
name:PropTypes.string.isRequired;
}

export default App

