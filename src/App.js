//import './App.css';
import api from "./api";
import { Component} from 'react';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Posts from "./Posts";

class App extends Component{

  state={
    users:[],
  }
  

  async componentDidMount(){
    const response = await api.get('users');
    this.setState({ users: response.data })
  }

  render(){
    
    const {users} = this.state;

    return(
      <Router>
        <div>
          <Navbar /* name={this.state.name} *//>
          <div className="container mx-auto max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Users users={users}/>}/>
              <Route path="posts" element={<Posts />}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
