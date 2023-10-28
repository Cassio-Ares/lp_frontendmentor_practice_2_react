import React from 'react'

const Error = ({style_error, text_error}) => {
  return (
    <>
     <span className={style_error}>{text_error}</span>
    </>
  )
}

export default Error