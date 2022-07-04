import React from 'react'
import './pricing.scss'


import {Modal, Text, Button} from '@nextui-org/react'
import {useDispatch, useSelector} from 'react-redux'
import { pricingUIActions } from '../../../../store/UI/PricingUI/PricingModal'

const PricingUI = () => {
    const dispatch = useDispatch()
    const open = useSelector((state) => state.pricingUI.isOpened)

    const closeModal = () => {
        dispatch(pricingUIActions.close())
    }

  return (
    <Modal
    open={open}
    onClose={closeModal}
    css={{backgroundColor: '#393e46', paddingBottom: '20px', paddingTop: '20px' ,display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
    >
        <Modal.Header>
            <Text css={{color: '#eee', fontSize: '30px'}}>Upgrade to <strong>PRO</strong></Text>
        </Modal.Header>
        <Modal.Body>
            <div className="price">
                <h2>39.99$</h2>
            </div>
            <div className="features-list">
                <h3>Enroll unlimited courses</h3>
                <h3>Video Lessons</h3>
                <h3>Live group chats</h3>
                <h3>1TB storage</h3>
            </div>
            <Button auto css={{backgroundColor: '#00adb5'}}>Upgrade</Button>
        </Modal.Body>
    </Modal>
  )
}

export default PricingUI