import React from 'react'
import Button from '@mui/material/Button';


type Props = {
  text: string,
  indexKey?: number,
  handleClick: (params: any) => any
  classButton?: string
}

const ButtonAlpha = ({ text, indexKey, handleClick, classButton }: Props) => {
  return (
    <button className={classButton} onClick={handleClick} key={indexKey}>{text}</button>)
}

export default ButtonAlpha