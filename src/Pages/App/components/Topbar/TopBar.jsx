import React from 'react'
import { IoMenu, IoNotificationsOutline } from 'react-icons/io5'
import {HiOutlineSearch} from "react-icons/hi"
import '../../styles/topbar.scss'
import { Button, Input, Popover, Container, User} from "@nextui-org/react";
import Flag from 'react-world-flags'
import Notifications from './Notifications';
import ProfileBox from './ProfileBox';



const TopBar = ({setCloseSide, closeSide, userData}) => {
  return (
    <>
    <div className={ closeSide ? "topbar-app-small" : "topbar-app"}>
      <div className="left">
      { closeSide ? <IoMenu id='menu-icon' onClick={() => setCloseSide(false)}/> : null}
      <Input
      labelLeft={<HiOutlineSearch/>}
      clearable
      placeholder='Search'
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
              src={userData && userData.avatar}
              name={userData && userData.firstName + " " + userData.lastName}
              description={userData && userData.role}
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