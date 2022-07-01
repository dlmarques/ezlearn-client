import React from 'react'
import { IoMenu, IoNotificationsOutline } from 'react-icons/io5'
import {HiOutlineSearch} from "react-icons/hi"
import '../../styles/topbar.scss'
import { Button, Input, Popover, Container, User} from "@nextui-org/react";
import Flag from 'react-world-flags'
import Notifications from './Notifications';
import ProfileBox from './ProfileBox';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarActions } from '../../../../store/UI/SideBar/sidebar';



const TopBar = () => {
  const dispatch = useDispatch();

  const sidebar = useSelector((state) => state.sidebarUI.isOpened)
  const avatar = useSelector((state) => state.auth.avatar)
  const firstName = useSelector((state) => state.auth.firstName)
  const lastName = useSelector((state) => state.auth.lastName)
  const role = useSelector((state) => state.auth.role)



  const openSidebar = () => dispatch(sidebarActions.openSidebar())

  return (
    <>
    <div className={ sidebar ? "topbar-app-small" : "topbar-app"}>
      <div className="left">
      { sidebar ? <IoMenu id='menu-icon' onClick={openSidebar}/> : null}
      <Input
      labelLeft={<HiOutlineSearch/>}
      clearable
      placeholder='Search'
      arial-label="search"
      />
      </div>
      <div className="right">
      <Popover>
        <Popover.Trigger>
          <Button auto css={{backgroundColor : "transparent"}}>
          <Flag code='gb' className='flag' />
          </Button>
        </Popover.Trigger>
        <Popover.Content css={{height : "auto", width: "100px", backgroundColor: "#393E46"}}>
          <Container css={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" , padding: "0", paddingTop: "10px", paddingBottom: "10px"}}>
          <Flag code='es' style={{height: "20px", cursor: "pointer"}}/>
          <Flag code='it' style={{height: "20px", cursor: "pointer"}}/>
          <Flag code='de' style={{height: "20px", cursor: "pointer"}}/>
          </Container>
           </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger>
          <Button auto css={{backgroundColor : "transparent"}}>
          <IoNotificationsOutline />
          </Button>
        </Popover.Trigger>
        <Popover.Content css={{height : "auto", width: "500px", backgroundColor: "#393E46"}}>
          <Container css={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0", paddingTop: "10px", paddingBottom: "10px"}}>
            <Notifications/>
          </Container>
           </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger>
        <User
              src={avatar && avatar}
              name={firstName && firstName + " " + lastName}
              description={role && role}
              as="button"
              css={{ 
                px: 0,
                transition: 'opacity 0.25s ease',
                cursor:'pointer',
                borderRadius: '$xs',
                background:'none',
                border:'none',
                '&:focus-visible': {
                  outline: '2px $primary solid',
                },
                '&:hover': {
                  opacity: 0.8
                },
              }}
            />
        </Popover.Trigger>
        <Popover.Content css={{height : "auto", width: "300px", backgroundColor: "#393E46", padding: "0"}}>
              <Container css={{padding: "0"}}>
                <ProfileBox/>
              </Container>
           </Popover.Content>
      </Popover>
      </div>
  
    </div>
    </>
  )
}

export default TopBar