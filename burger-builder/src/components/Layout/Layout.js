import React from 'react';
import styles from './Layout.module.css'
import Aux from '../../hoc/Aux'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>{props.children}</main>
    </Aux>
);


export default layout;