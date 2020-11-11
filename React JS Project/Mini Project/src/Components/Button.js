import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

export default function Button({child}) {

    let items = React.Children.toArray(child);
    console.log(items);

    return (
        <div className="button">
           {items[0]}
        </div>  
    )
}

Button.propTypes = {
    children: PropTypes.node
    }
    