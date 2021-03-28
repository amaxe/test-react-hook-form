import loading from './images/loading.svg'
import React from 'react'

export function Preloader() {
    return (
        <div>
            <img src={loading} alt="" style={{width: '70px', height: '70px'}}/>
        </div>
    )
}