import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
        return (
            <div className="h-full flex-grow flex items-center justify-center p-6" style={{height:"450px"}}>
                <img className="h-16 w-16" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner