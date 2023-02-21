import React from 'react';
import {Menu} from 'antd';

function LeftMenu(){
    return(
        <Menu>
        <Menu.Item >
            <a href="/register">Register</a>
        </Menu.Item>
        </Menu>
    )
}

export default LeftMenu;