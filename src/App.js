import Navbar from './Navbar'
import Category from './Category'
import React from 'react';
import Search from './Search';
import Table from './Table';




class App extends React.Component {
  state={
    noOfmovies:0,
  }

  receiveMoviesData=(number)=>{
    this.setState({noOfmovies:number})
  }

  render(){
  return ( 
  <React.Fragment>
  <Navbar/>

<div className="row">
  <div className="col-2 p-4">
      <Category/>  
  </div>

  <div className="col-10 p-4">
    <div className="row">
      <div className="col-3">
        <Search noOfmovies={this.state.noOfmovies}/>
      </div>
    </div>
  <div className="row">
    <div className="col-8">
      <Table sendData={this.receiveMoviesData}/>
    </div>
  </div>
  </div>
</div>


</React.Fragment>
); 
  }
}

export default App;
