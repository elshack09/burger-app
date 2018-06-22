import React from 'react'
import Aux from '../../hoc/Aux'


const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {/* allow us to use the layout component as a wrapper around the core content componets that needs to be rendered to the screen */}
            {props.children}
        </main>
    </Aux>
)
export default layout