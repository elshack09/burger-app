import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className ={classes.Content}>
            {/* allow us to use the layout component as a wrapper around the core content componets that needs to be rendered to the screen */}
            {props.children}
        </main> 
    </Aux>
)
export default layout