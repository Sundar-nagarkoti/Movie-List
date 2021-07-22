import React  from "react";
class Category extends React.Component{
    state={
        allGenre:[],
    }

componentDidMount(){
    fetch("/genre").then((res)=>{
        return res.json()
    }).then((e)=>{
       this.setState({allGenre:e});
       console.log(this.state.allGenre);
    })
}

    render(){
        return (
            <ul class="list-group">
                {this.state.allGenre.map((el)=>{
                   return (
                    <li class="list-group-item" key={el._id}>{el.name}</li>
                   );
                })
                }
            </ul>
        );
    }
}

export default Category;

