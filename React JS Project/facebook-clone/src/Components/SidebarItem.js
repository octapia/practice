import React from 'react'
import './SidebarItem.css'
import {Avatar} from '@material-ui/core'
function SidebarItem({src,Icon,title}) {
    return (
        <div className="sidebarItem">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarItem
