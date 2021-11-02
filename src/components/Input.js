import React from 'react'

export default function Input({colorValue,setColorValue}) {
    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            
            <label htmlFor="">Add Color Name</label>

            <input autoFocus placeholder="Add color name..." value={colorValue} type="text" onChange={(e)=>setColorValue(e.target.value)} />
        </form>
    )
}
