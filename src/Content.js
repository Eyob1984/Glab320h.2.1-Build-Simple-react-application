import React from 'react'

export default function Content(props) {
  return (
    <div>
      <p style={{color: props.color}}>{props.text}</p>
    </div>
  )
}
