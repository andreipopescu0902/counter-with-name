import React from "react"

export class ClassComponent extends React.Component { //metoda speciala a claselor, folosit cand se creeaza un obiect dintr o clasa
    constructor(props) { //parametru al functiei constructor, folosit pentru a trece date de la parinte la copil
        super(props) //folosit pentru a "chema" parintele constructorului clasei
                    // cand folosim react.component, este obligatoriu sa folosim super(props) ca sa ne asiguram ca parintele clasei constructor se executa corect 
        this.state = {
            name: "",
            age: 0,
        }
    }

    render() {
        return <div>
        <input value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
        <br />
        <br />
        <button onClick={()=>this.setState(currentState => {return{age: currentState.age - 1}})}>-</button>
        {this.state.age}
        <button onClick={()=>this.setState(currentState => {return{age: currentState.age + 1}})}>+</button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old .
    </div>
    }
}