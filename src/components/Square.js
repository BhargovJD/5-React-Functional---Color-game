import React from 'react'

export default function Square({colorValue}) {
    return (
        <div className="square" style={{backgroundColor:colorValue}}>
            <p>{colorValue?colorValue :"Empty value"}</p>
        </div>
    )
}


Square.defaultProps ={
    colorValue:"Empty Color Value"
}
