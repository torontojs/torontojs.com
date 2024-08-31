import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import './styles.sass'

export default ({ open, button, buttonLabel, children })->
  [open, setOpen] = useState open or false

  defaultButton = ->
    <button onClick={=> setOpen not open}>
      {buttonLabel or 'Open'}
    </button>

  <>
    {button?((evt)-> evt?.preventDefault?(); setOpen not open) or defaultButton()}

    <Modal
      open={open}
      onClose={=> setOpen(false)}
      center
      classNames={{
        overlay: 'Overlay'
        modal: 'Modal'
        overlayAnimationIn: 'backdrop-in'
        overlayAnimationOut: 'backdrop-out'
        modalAnimationIn: 'modal-in'
        modalAnimationOut: 'modal-out'
      }}
    >
      {children}
    </Modal>
  </>
