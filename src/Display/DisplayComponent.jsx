import React from 'react';
import prostar from '../lab-react-stardom/resources/prostars.json';
import './DisplayComponent.css'


// eslint-disable-next-line
const details=prostar.filter((value,index)=>{          //This contain array of first 5 stars details
    if(index<5){
      return value
    }
  })  

function Table(props){                      //this function renturns jsx elements that we display in the table
    return(details.map((value,index)=>{
        return(<tr>
        <td><img src={value.pictureUrl} alt="pics"></img></td>
        <td>{value.name}</td>
        <td>{value.popularity}</td>
        <td><button onClick={()=>{props.handler(index)}}>Delete</button></td>
    </tr>)
    }))
}

class Display extends React.Component{
    constructor(props){
        super(props);
        this.state={array:details}          //hold details of stars
        this.handle=this.handle.bind(this)  // event handler function        
    }
    handle=(ind)=>{                         //onclick function on delete button 
        if(ind===0){
            details.shift()
        }
        else{
            details.splice(ind-1,ind)
        }
        this.setState({array:details})
    }

    change=()=>{                            //on click on random button and this function push new star in array
        const new_member=prostar[Math.floor(Math.random()*prostar.length+1)]
        console.log(new_member)
        details.push(new_member)
        this.setState({array:details})
    }
    sort=()=>{                               //this function sort stars by name
        details.sort(function(a,b){return (a.name>b.name)?1:-1})
        this.setState({array:details})
    }
    popular=()=>{                             //this function sort stars by popularity
        details.sort(function(a,b){return (a.popularity<b.popularity)?1:-1})
        this.setState({array:details})
    }
   
    render(){
        return(<div className="details">   
            <div className="buttons">
            <button className="random" onClick={this.change}>Get Random Star</button>
            <button className="sort" onClick={this.sort}>Sort By Name</button>
            <button className="popularity" onClick={this.popular}>Sort By Popularity</button>
            </div>
            <table className="table">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                <Table handler={this.handle}/>
            </table>
        </div>)
    }
}
export default Display;

