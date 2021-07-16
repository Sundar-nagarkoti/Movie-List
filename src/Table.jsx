import { render } from '@testing-library/react'
import React from 'react'

class Table extends React.Component{
    state={
      allMovies:[]
    }
componentDidMount(){
  fetch("/movies").then((res)=>{
     return res.json()
  }).then((e)=>{
    this.setState({allMovies:e});
  })
}
    render(){

      let numberOfpages=Math.ceil(this.state.allMovies.length/5);
      let arr=[];
      for(let i=1;i<=numberOfpages;i++){
         arr.push(i);
        }

      return(

          <div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {
      this.state.allMovies.map((el)=>{
        return (
          <tr>
          <td>{el.title}</td>
          <td key={el._id}>{el.genere}</td>
          <td>{el.numberInStock}</td>
          <td>{el.dailyRentalRate}</td>
          <td>like</td>
          <td><button type="button" class="btn btn-danger">Delete</button></td>
         </tr>
        );
      })
    }
  </tbody>
</table>

<nav>
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    {
      arr.map((e)=>{
        return (
          <li class="page-item"><a class="page-link" href="#">{e}</a></li>
        );
      })
    }
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
          </div>
           
        );
    }
}

export default Table;

