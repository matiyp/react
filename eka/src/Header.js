import React from 'react'

export default function Header(props) {
  return (
    <>
    <header>
        <div className='container-fluid'>
            <h1>{props.title}</h1>
        </div>
    </header>
    </>
  )
}
