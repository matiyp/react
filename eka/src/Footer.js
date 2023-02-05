import React from 'react'

export default function Footer(props) {
  return (
    <footer>
        <div className='container-fluid'>
            <p>{props.author}</p>
        </div>
    </footer>
  )
}
