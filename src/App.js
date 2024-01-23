import {Component} from 'react';
import Table from './Table';
import Form from './Form';
class App extends Component{
  state=
  {
   characters:[]
  }
  removeCharacters=(index)=>{
    const {characters}=this.state
    let filtered=characters.filter((character,i)=>{
      return  i!==index
    })
    this.setState({characters:filtered})
  }
  handleSubmit=(character)=>{
    this.setState({characters:[...this.state.characters,character]})

  }
    render()
    {
     const {characters}=this.state
      return (
      <div>
       <h1>Tabel</h1> 
       <Table removeCharacters={this.removeCharacters} charactersData={characters}/>
       <Form handleSubmit={this.handleSubmit}/>
      </div>
      )
    }
}
export default App;