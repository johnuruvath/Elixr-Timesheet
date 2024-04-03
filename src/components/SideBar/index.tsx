import React from 'react';
import './index.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const SideBar = () => {

    const tooltips = {
        lan: "Language",
        group: "Users",
        date_range: "Timesheets",
        settings: "Settings"
    };

    const renderTooltip = (text) => (
        <Tooltip >
            {tooltips[text]}
        </Tooltip>
    );

    return (

        <div className='sidebar-wrapper'>
            <div className='menu-container'>
                <div className='logo-item'>
                    <img src="logo 1.png" alt="logo" />
                </div>
                <OverlayTrigger placement="right" overlay={renderTooltip('lan')}>
                    <div className='menu-item'>
                        <span className="material-symbols-outlined"> account_tree </span>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={renderTooltip('group')}>
                    <div className='menu-item'>
                        <span className="material-symbols-outlined">group</span>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={renderTooltip('date_range')}>
                    <div className='menu-item date_range'>
                        <span className="material-symbols-outlined">date_range</span>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={renderTooltip('settings')}>
                    <div className='menu-item'>
                        <span className="material-symbols-outlined">settings</span>
                    </div>
                </OverlayTrigger>
            </div>
            <div className='arrow-container'>
                <span className="material-symbols-outlined">
                    keyboard_double_arrow_right
                </span>
            </div>
        </div>

    );
}

export default SideBar