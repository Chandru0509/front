import { Component } from "react";
const TableHeader=()=>{
    return(     <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Action</th>
                    </tr>
                </thead>) }
const TableBody=(props)=>{
    const {charactersData,removeCharacters}=props
    const rows=charactersData.map((character,index)=>
    {
        return(
            <tr key={index}>
                <td>{character.name}</td>
                <td>{character.job}</td>
                <td><button onClick={()=>removeCharacters(index)}>Delete</button></td>
            </tr>
          )
    })
     return(
     <tbody>
        {rows}
     </tbody>
     )
    }
class Table extends Component{
    render(){
        const {charactersData,removeCharacters}=this.props
        return(
            <table>
                <TableHeader/>
                <TableBody removeCharacters={removeCharacters} charactersData={charactersData}/>
            </table>)}}
export default Table;













