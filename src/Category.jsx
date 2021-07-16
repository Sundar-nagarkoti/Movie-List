import React  from "react";
class Category extends React.Component{
    state={
        allGenre:[],
    }

componentDidMount(){
    fetch("http://localhost:4000/genre").then((res)=>{
        return res.json()
    }).then((e)=>{
        
    })
}

    render(){
        return (
            <ul class="list-group">
                {this.state.allGenre.map((el)=>{
                   return (
                    <li class="list-group-item" key={el}>{el}</li>
                   );
                })
                }
            </ul>
        );
    }
}

export default Category;

