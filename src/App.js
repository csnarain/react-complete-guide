import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person'

// const app = (props) => {
//     const [personsState, setPersonsState] = useState({
//       persons: [
//         { name: 'Lakshminarayanan S', age: 41 },
//         { name: 'Shenbagavalli R', age: 37 },
//         { name: 'Vaibhav Narayanan', age: 10 }
//       ]
//       // otherState: 'Some Value'
//     })
//     const [otherState, setOtherState] = useState('Some Value');    
//     const switchNameHandler = () => {
//       setPersonsState({
//         persons: [
//           { name: 'Lakshminarayanan Sundareswaran', age: 41 },
//           { name: 'Shenbagavalli R', age: 37 },
//           { name: 'Vaibhav Narayanan', age: 10 }
//         ]
//         // otherState: personsState.otherState
//       })
//     }
//     return (
//       <div className="App">
//         <h1>Test App in React</h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age}> 
//         click={switchNameHandler}My hobbies: Reading Books</Person>
//         <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} />
//         <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age} />
//       </div>
//     )
// }

// state = {
//   persons: [
//     { name: 'Lakshminarayanan S', age: 41 },
//     { name: 'Shenbagavalli R', age: 37 },
//     { name: 'Vaibhav Narayanan', age: 10 }
//   ]
// }

class App extends Component {
  state = {
    persons: [
      { id: 'sdksjdk', name: 'Lakshminarayanan S', age: 41 },
      { id: 'awadksjdk', name: 'Shenbagavalli R', age: 37 },
      { id: 'zaardksjdkname', name: 'Vaibhav Narayanan', age: 10 },
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 41 },
  //       { name: 'Shenbagavalli R', age: 37 },
  //       { name: 'Vaibhav Narayanan', age: 11 },
  //     ]
  //   })
  // }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Lakshminarayanan S', age: 41 },
        { name: event.target.value, age: 37 },
        { name: 'Vaibhav Narayanan', age: 11 },
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice()
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }


  togglePersonsHandler = (params) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px, solid, blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)} />
          })}

        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!!!</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: 'App' },
    //   React.createElement("h1", null, "Does this work now??")
    // );
  }
}

export default App;
