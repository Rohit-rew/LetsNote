import logo from './logo.svg';
import './App.css';
import "./index.css"
import React from 'react';
import Input from './input'
import Note from './note';
import {nanoid} from "nanoid"

export default class App extends React.Component {

  constructor(){
    super()

    this.state= {

      notes :  this.getFromLocal() || []

    }
  }


  addnote = (e , input)=>{
      if(e.key=='Enter'){
        if(!e.target.value) return
          this.setState(function(prestate){
              return {
                notes : [...prestate.notes , {
                  text : e.target.value,
                  ischecked : false,
                  id : nanoid(),
                  editable : false
                }]
              }
          })

          setTimeout(function(){
            e.target.value =''
          },1)
      
      }

      if(e.target.matches('.submit')){
        if(!input.value)return
        this.setState(prestate=>{

          return {
            notes : [...prestate.notes , {
              text : input.value,
              ischecked : false,
              id : nanoid(),
              editable : false
            }]
          }
        })
        setTimeout(function(){
          input.value =''
        },1)
      }
      this.setToLocal()
      
  }

  tickuntick =(e , id)=>{

    this.setState((prestate)=>{
        return  prestate.notes.map(function(note){
              if(note.id == id){
                return note.ischecked = !note.ischecked
              }else{
                return note
              }
          })
    })
    this.setToLocal()
  }

  deletenote = (e,id)=>{
    this.setState((prestate)=>{
      let index1
      prestate.notes.filter(function(note ,index){
          if( id == note.id){
            index1 = index
          }

      })

      console.log(index1)

      prestate.notes.splice(index1 ,1)

      return prestate
    })
    this.setToLocal()
  }

  editnote = (id)=>{
    console.log(id)

    this.setState(prestate=>{
      return prestate.notes.map(note=>{
            if(note.id==id){
              return note.editable = true
            }
      })
    })

  }

  setedit = (e , id)=>{
    if(e.key=="Enter"){
      this.setState(prestate=>{
        return prestate.notes.map(note=>{
          if(note.id==id){
            return note.editable = false , note.text = e.target.value
          }
        })
      })

    }
    
  }

  componentDidUpdate(){
    this.setToLocal()
   return  this.state.notes.map((note)=>{
        return (
          <Note 
          key ={nanoid()}
          note={note.text} 
          ischecked={note.ischecked} 
          tickuntick={this.tickuntick} 
          id={note.id}
          deletenote={this.deletenote}
          editable={note.editable}   
          editnote={this.editnote}  
          setedit={this.setedit} 
          />
        )
    })

    
  }

  

  setToLocal=()=>{
    localStorage.setItem('notesapp' , JSON.stringify(this.state.notes))
  }

  getFromLocal=()=>{
    return  JSON.parse(localStorage.getItem('notesapp'))
  }


  render(){



    return (

      <main>

          <div className='container'>
              <Input addnote={this.addnote}/>

              <div className='notescontainer'>

                {this.componentDidUpdate()}
        
              </div>

          </div>

      </main>
      
    )

  }
}


