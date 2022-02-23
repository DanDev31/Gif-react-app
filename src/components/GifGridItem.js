import React from 'react'

export const GifGridItem = ({title, url}) => {

    // console.log( url )
    return (
        <div className="gif__card animate__animated animate__fadeIn">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}