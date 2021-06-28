import React from 'react';

import { Badge, Layout, Menu } from 'antd';
import { EditOutlined, TeamOutlined, UserSwitchOutlined, ExclamationCircleOutlined, DatabaseOutlined, SmileOutlined, PictureOutlined } from '@ant-design/icons';

import PhotoGallery from '../PhotoGallery/PhotoGallery';
import TogPost from '../TogPost/TogPost';
import ManageVolunteers from '../ManageVolunteers/ManageVolunteers';
import ManageAdmins from '../ManageAdmins/ManageAdmins';
import ManageDonors from '../ManageDonors/ManageDonors';
import DonationRequests from '../DonationRequests/DonationRequests';
    

const SideMenu = ({handleMenu}) => {
    return (
        <Menu className='sticky-top' theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item
            key="1"
            className='center justify-content-start py-3 menu-item'
            title="Timeline of Genorisity"
            icon={<EditOutlined />}
            onClick={() => handleMenu('Timeline of Genorisity', <TogPost />)}> ToG </Menu.Item>

        <Menu.Item
            key="2"
            className='center justify-content-start py-3 menu-item'
            title="Request"
            icon={<ExclamationCircleOutlined />}
            onClick={() => handleMenu('Requests', <DonationRequests/>)}> Requests </Menu.Item>

        <Menu.Item
            key="3"
            className='center justify-content-start py-3 menu-item'
            icon={<PictureOutlined />}
            onClick={() => handleMenu('Photo Gallery', <PhotoGallery/>)}>  Gallery </Menu.Item>

        <Menu.Item 
            key="4" 
            className='center justify-content-start py-3 menu-item' 
            icon={<SmileOutlined />} 
            onClick={() => handleMenu('Manage Volunteers', <ManageVolunteers/>)}> Volunteers </Menu.Item>

        <Menu.Item 
            key="5" 
            className='center justify-content-start py-3 menu-item' 
            icon={<TeamOutlined />} 
            onClick={() => handleMenu('Manage Donors', <ManageDonors/>)}> Donors </Menu.Item>

        <Menu.Item 
            key="6" 
            className='center justify-content-start py-3 menu-item' 
            icon={<UserSwitchOutlined />} 
            onClick={() => handleMenu('Manage Admins', <ManageAdmins/>)}> Admins </Menu.Item>
    </Menu>
    );
};

export default SideMenu;