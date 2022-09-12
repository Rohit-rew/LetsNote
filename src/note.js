import React from "react";

export default function Note (props){

    console.log(props.editable)

    let style={

        textDecoration : props.ischecked ? "line-through" : 'none',
        color : props.ischecked ? "grey" : 'black',
        textDecorationColor: "orange"
    }

   
    return (

        <div className='notes'>

                <input  onChange={(e)=>props.tickuntick(e , props.id)} className='checkbox' type="checkbox" checked={props.ischecked}/>
                {!props.editable && <p onDoubleClick={(e)=>props.editnote(props.id)} style={style} className='text'>{props.note}</p>}

                {props.editable && <input onKeyUp={(e)=>props.setedit(e , props.id)} defaultValue={props.note}  className="editfield" type='text'/>}
                <button onClick={(e)=>props.deletenote(e,props.id)}><span>
                    <img className="delimage" src={require("../src/delete.png")}/>
                    </span></button>

        </div>

    )
}

// src={require('./logo.jpeg')}

 