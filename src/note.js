import React from "react";

export default function Note (props){

    console.log(props.editable)

   
    return (

        <div className='notes'>

                <input  onChange={(e)=>props.tickuntick(e , props.id)} className='checkbox' type="checkbox" checked={props.ischecked}/>
                {!props.editable && <p onDoubleClick={(e)=>props.editnote(props.id)} style={{textDecoration : props.ischecked ? "line-through" : 'none'} } className='text'>{props.note}</p>}

                {props.editable && <input onKeyUp={(e)=>props.setedit(e , props.id)} defaultValue={props.note}  className="editfield" type='text'/>}
                <button onClick={(e)=>props.deletenote(e,props.id)}>D</button>

        </div>

    )
}

 