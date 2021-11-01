import React from 'react'

export const GifGridItem = ({ url}) => {

    // console.log({id, title, url});

    return (
        // <div className='col-sm-2'>
            
                <img className=" col card animate__animated animate__fadeIn" src={ url} alt={ "" }/>
            
        // </div>
    )
}
