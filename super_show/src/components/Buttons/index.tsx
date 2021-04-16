import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'

import './index.scss'

type ButtonProps = {
  add: () => void
  remove: () => void
  quantity: number
}

const Buttons = ({ add, remove, quantity }: ButtonProps) => {
  return (
    <div className="buttons_quantity">
      <ButtonGroup size="sm">
        <Button
          className="button_increase"
          variant="outline-primary"
          onClick={add}
        >
          <GoPlus />
        </Button>
        <Button className="button_quantity" disabled>
          {quantity}
        </Button>
        <Button
          className="button_decrease"
          variant="outline-primary"
          onClick={remove}
        >
          <FiMinus />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Buttons
