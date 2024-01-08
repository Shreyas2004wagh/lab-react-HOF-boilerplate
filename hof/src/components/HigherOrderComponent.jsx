import React from "react";

export default class HigherOrderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 2 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 22, years: 2 },
        { id: '2', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 23, years: 18 }
      ],
      filterUsingUserType: [],
      filterUsingFirstLetter: [],
      filterUsingAge:[],
      TotalYears:0
    };

    let filterData = this.state.userData.filter((el,i,arr) => el.user_type === "Designer");
    this.state.filterUsingUserType = filterData;

    let ChangeName = this.state.userData.filter((el,i,arr) => el.name.startsWith('J'));

    this.state.filterUsingUserType = filterData;
    this.state.filterUsingFirstLetter = ChangeName;

    let ChangeAge = this.state.userData.filter((el,i,arr) => el.age>28 && el.age<=50);
    
    this.state.filterUsingAge = ChangeAge;
    

    let total=this.state.userData.filter((el)=>el.user_type=="Designer").reduce((acc,el,i,arr)=>
    {
    return acc+el.years;
    },0)
    this.state.TotalYears=total;
}

  render() {
    return (
      <>
        <h1>Display All Items</h1>
        {this.state.userData.map((el) => (
          <div key={el.id} style={{ width: "200px", display: "flex", border: "2px solid black", justifyContent: "center", alignItems: "center", fontSize: "20px", color:"blue" }}>
            Id: {el.id}
            <br />
            Name: {el.name}
            <br />
            UserType: {el.user_type}
          </div>
        ))}

        <h1>Display Using User Type</h1>
        {this.state.filterUsingUserType.map((el) => (
          <div key={el.id} style={{ width: "200px", display: "flex", border: "2px solid black", justifyContent: "center", alignItems: "center", fontSize: "20px" , color:"blue"}}>
            Id: {el.id}
            <br />
            Name: {el.name}
            <br />
            UserType: {el.user_type}
          </div>
        ))}

        <h1>Display Using User J</h1>
        {this.state.filterUsingFirstLetter.map((el) => (
          <div key={el.id} style={{ width: "200px", display: "flex", border: "2px solid black", justifyContent: "center", alignItems: "center", fontSize: "20px" , color:"blue"}}>
            Id: {el.id}
            <br />
            Name: {el.name}
            <br />
            UserType: {el.user_type}
          </div>
          
        ))}

    <h1>Display Using Age</h1>
        {this.state.filterUsingAge.map((el) => (
          <div key={el.id} style={{ width: "200px", display: "flex", border: "2px solid black", justifyContent: "center", alignItems: "center", fontSize: "20px" , color:"blue"}}>
            Id: {el.id}
            <br />
            Name: {el.name}
            <br />
            UserType: {el.user_type}
          </div>
          
        ))}


<h1>Display Using experience</h1>
        
        <p style={{border:"2px solid black",color:"blue"}}>{this.state.TotalYears}</p>
      </>
);
}
}
