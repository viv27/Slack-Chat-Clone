import React, {useEffect, useState}  from 'react'
import "./Sidebar.css";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

import SidebarOption from "./SidebarOption";

import InsertCommentIcon from '@material-ui/icons/InsertCommentOutlined';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcons from '@material-ui/icons/AppsOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import AddIcon from '@material-ui/icons/Add';

import db from '../Firebase';
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(()=>{
            // this runs when the sidebar component loads as well as when the variables provided in [] is changed 
            // [] means its run once

            db.collection('rooms').onSnapshot( (snapshot) => 
                setChannels(
                    snapshot.docs.map((doc)=> ({
                        id:doc.id,
                        name: doc.data().name,
                    }))
            ))
    }, []);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">

                   <div className="sidebar__icon"><h2><img className="sidebar__info__img" src="https://thumbs.bfldr.com/at/pl546j-7le8zk-afym5u/v/3033396?expiry=1621077639&fit=bounds&height=800&sig=ZTY4MjhhMzQ0ZDVkZDVkZjc0ZWE2YmI4NjA0MGQ5Y2E3ZGY5ZDM5Yg%3D%3D&width=1100"></img>My Slack</h2></div> 
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div> 
                <CreateIcon />
            </div>
            <div className="Channels">
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Chat Channels"/>
            {channels.map(channel => (
                <SidebarOption title = {channel.name} id={channel.id} />
            ))}
            </div>
            <hr/>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & User groups"/>
            <SidebarOption Icon={AppsIcons} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            
            {/* <div className="Channels">

            {channels.map(channel => (
                <SidebarOption title = {channel.name} id={channel.id} />
            ))}
            </div> */}
            
        </div>
    )
}

export default Sidebar
