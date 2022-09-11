import React from 'react'


export default function Input(props){



    return (
            <div className='inputcontainer'> 
            <input id='maininput' onKeyUp={(e)=>props.addnote(e)} className='maininput' name='maininput' typeof='text' placeholder='Notes goes here.....'/>
            <button onClick={(e)=>props.addnote(e ,document.getElementById('maininput') )} className='submit'> Submit </button>
            </div>

    )
}