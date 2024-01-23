import { Component } from "react";

class Form extends Component{
   initialState={
    name:"",
    job:""
   }
   state=this.initialState;
   handleChange=(event)=>{
    const {name,value}=event.target
    this.setState({[name]:[value]})
   }
   submitForm=()=>{
    let character=this.state
    this.props.handleSubmit(character)
    this.setState(this.initialState)
   }
   render()
   {
    return(
        <form>
            <br/>
            <label htmlFor="name">Name</label>
            <input 
            type="text"
            name="name"
            value={this.state.name}
            id="name"
            onChange={this.handleChange}
             />
             <br/>
             <label htmlFor="job">Job</label>
             <input
             type="text"
             id="job"
             name="job"
             value={this.state.job}
             onChange={this.handleChange} />
             <br/>
             <input type="button" value="submit" onClick={this.submitForm}/>
        </form>
        
            )
   }
}
export default Form;