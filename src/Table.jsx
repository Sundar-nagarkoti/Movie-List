import { render } from '@testing-library/react'
import React from 'react'

class Table extends React.Component{
    state={
      allMovies:[
        {
        title:"Terminator",
        genere:"Action",
        sotck:"2",
        rate:"2.5",
        },

        {
          title:"Die Hard",
          genere:"Action",
          sotck:"3",
          rate:"2.5",
        },

        {
          title:"Get Out",
          genere:"Thriller",
          sotck:"1",
          rate:"3.5",
        },
        
        {
          title:"Trip to Italy",
          genere:"Comedy",
          sotck:"5",
          rate:"1.5",
        }

      ]
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
          <td>{el.genere}</td>
          <td>{el.sotck}</td>
          <td>{el.rate}</td>
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

