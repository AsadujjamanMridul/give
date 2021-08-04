import React, { useState, useContext } from 'react';
import './AdminPanel.scss'
import logo from '../../../images/logo.png'

import { Layout } from 'antd';
import { Avatar } from 'antd';

import TogPost from '../TogPost/TogPost';
import SideMenu from './SideMenu';

import { Link } from "react-router-dom";
import { UserContext } from '../../../App';

const { Content, Sider } = Layout;

const AdminPanel = () => {

    const [headerTitle, setHeaderTitle] = useState('Timeline of Genorisity');
    const [innerContent, setInnerContent] = useState(<TogPost/>);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleMenu = (title, component) => {
        setHeaderTitle(title);
        setInnerContent(component);
    }
    
    return (

        <Layout className='min-vh-100'>

            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    // console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    // console.log(collapsed, type);
                }}
            >
                <Link to='/'>
                    <div className="logo d-flex justify-content-center" style={{ height: "60px" }}>
                        <img src={logo} alt="" className='img-fluid h-100' style={{ padding: "1em 0" }} />
                    </div>
                </Link>

                <SideMenu handleMenu={handleMenu}/>

            </Sider>

            <Layout>

                <div className=' d-flex align-items-center justify-content-between' style={{ backgroundColor: "rgba(41, 222, 146, 0.4) ", height: "64px" }}>
                    <h2 className='header'>{headerTitle}</h2>
                    <Avatar src={loggedInUser.imageURL} className='shadow-sm' size={35} style={{ margin: "0 24px 0 0" }}>K</Avatar>
                </div>

                <Content>
                    <div className="content site-layout-background py-5 px-4 p-lg-4" style={{ minHeight: "100%" }}>
                        {innerContent}
                    </div>
                </Content>

                <footer className='admin-footer'> Give - 2021 . All rights reserved. </footer>

            </Layout>

        </Layout>
    );
};

export default AdminPanel;