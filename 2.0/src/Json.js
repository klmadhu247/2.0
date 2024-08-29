import React,{Component} from "react";

class Json extends Component{
    state={
        users:[
            {
              "id": 1,
              "name": "Alice Johnson",
              "age": 27,
              "image": "https://res.cloudinary.com/demo/image/upload/v1681392800/sample.jpg"
            },
            {
              "id": 2,
              "name": "Bob Smith",
              "age": 34,
              "image": "https://res.cloudinary.com/demo/image/upload/v1681392800/sample.jpg"
            },
            {
              "id": 3,
              "name": "Charlie Davis",
              "age": 22,
              "image": "https://res.cloudinary.com/demo/image/upload/v1681392800/sample.jpg"
            },
            {
              "id": 4,
              "name": "Diana Brown",
              "age": 29,
              "image": "https://res.cloudinary.com/demo/image/upload/v1681392800/sample.jpg"
            },
            {
              "id": 5,
              "name": "Ethan Williams",
              "age": 31,
              "image": "https://res.cloudinary.com/demo/image/upload/v1681392800/sample.jpg"
            }
          ]
          
          
    }
    render()
    {
        return(
            <div>
                {this.state.users.map(user=><div><img src={user.image} width={100} height={70}></img><h2>Name: {user.name}</h2><h3>Age: {user.age}</h3></div>)}
            </div>
        )
    }
}
export default Json;