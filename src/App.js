import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import React, {Component} from 'react'


import './App.css';

class App extends Component  {

  constructor(){
    super()
    
    this.state={
      title: 'Our Applaction',
      employeeData:[
        // {name:'ali', age:33}
      ],
      chk:0,
      index:'',
      save:'Add',

    }
 

    
  }


 saved= (e) =>{
  
   e.preventDefault()
 let  oldArr = this.state.employeeData;


 let name = this.refs.txtName.value
 let age = this.refs.txtAge.value

 let newObj= {
   name:name,
   age:age
 }
if (this.state.chk===0) {
  oldArr.push(newObj)
  this.setState({
    employeeData : oldArr
  })
  
}else{
  let employeeData = this.state.employeeData
  employeeData[this.state.index].name=name
  employeeData[this.state.index].age=age

  this.setState({
    employeeData:employeeData,
    chk:0,
    save:'Add',
    title:'Our Applcation'
  })
  

}
this.refs.myForm.reset()
};



 edite= (i) =>{
  
  let employeeData=  this.state.employeeData[i] 
  this.refs.txtName.value=employeeData.name
  this.refs.txtAge.value=employeeData.age
   

  this.setState({
 
    chk:1,
    index:i,
    save:'Update',
    title:'Update Applcation'
  })
 }
  
    
    
    
  
 delete = (i) =>{
 
 let employeeDataa = this.state.employeeData;
  employeeDataa= employeeDataa.filter( (e) => {
    return e !=employeeDataa[i]
  })
  

 
 this.setState({
   employeeData :employeeDataa,
   chk:0,
   save:'Add',
   title:'Our Applcation'
 })
}


  render(){
    let allObj = this.state.employeeData
   let head=''
    if (this.state.employeeData.length>0) {
      head= <div className="container container1" >
      <div className="container-user">  
        <span>Name </span>
       <span>Age</span> </div>
       <div className="container-btn"> 
             
        </div>
       </div>
    }
   


    return (
      <div>
       <h3 className='title'>{this.state.title}</h3>
         <form ref="myForm">
          <div> <label>Name</label>
           <input type="text" ref='txtName'/></div>
         <div> 
            <label>Age</label>
           <input type="text" ref='txtAge'/>
           </div>
           
           <button onClick={ e =>{this.saved(e)}}>{this.state.save}</button>

         </form>

       
  

      {head}
      
      {allObj.map(  (e,i) => 
        <div className="container " key={i}>
        <div className="container-user">  
          <span>{e.name} </span>
         <span>{e.age}</span> </div>
         <div className="container-btn">      <button className="edite" onClick={ e => this.edite(i)}>edite</button>   
           <button className="delete" onClick={ e => this.delete(i)}>delete</button></div>
         </div>
      
      )}

      </div>
     
    )}
  

}

export default App;
