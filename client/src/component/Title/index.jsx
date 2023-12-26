import React from 'react'
import './index.scss'
function Title({ dota,data}) {
    return (
        <div className="title">
            <div className="up">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                <rect width="20" height="40" rx="4" fill="#DB4444" />
            </svg>
            <div className='stit' >{data}</div>
            </div>
            <div className='tit'>{dota}</div>
        </div>
    )
}

export default Title