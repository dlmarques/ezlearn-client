import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Modal} from '@nextui-org/react'
import { uploadUIActions } from '../../../../../store/UI/UploadModal/uploadfile'
import DragAndDrop from './DragAndDrop'

const UploadModal = () => {
    const dispatch = useDispatch()
    const open = useSelector((state) => state.uploadUI.isOpened)

    const closeUpload = () => {
        dispatch(uploadUIActions.close())
    }

  return (
    <Modal
    open={open}
    onClose={closeUpload}
    >
        <DragAndDrop/>
    </Modal>
  )
}

export default UploadModal