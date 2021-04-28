import {Component} from 'react'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      robotArr: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    axios.get('/api/robots')
      .then(res=>{
        // console.log(res.data)
        this.setState({robotArr: res.data})
      })
      .catch(err=>console.log(err))
  }

  handleDelete(id){
    axios.delete(`/api/robots/${id}`)
      .then(res=>{
        // console.log(res.data)
        this.setState({robotArr: res.data})
      })
      .catch(err=>console.log(err))
  }

  render(){
    return (
      <div className="App">
        <div>Robots!!</div>
        {
          this.state.robotArr.map(robotObj => {
            return(
              <div key={robotObj.id}>
                <h3>{robotObj.name}</h3>
                <img src={robotObj.image} alt={robotObj.name} />
                <br/>
                <button onClick={()=>this.handleDelete(robotObj.id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
