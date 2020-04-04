import React from 'react'
import Mainheader from './header.js'
import './App.css';
import Natures from './Natures.js'
import Selectnature from './selectnature.js'



class App extends React.Component{
  constructor(props){
    super(props)
    const naturelist = Natures.Natures || {}
    this.state={listedenatures:naturelist,nature:{}}
  }


  //handleItemClick = (e,{name})=>this.setState({activeitem:name})

  /*async componentDidMount(){
    
    const naturelist = await (
      Natures.Natures || 'objet pas bien connu' //renvoi la valeur de droite si celle de gauche est à false, undefined ou null
    )
    this.setState({listedenatures : naturelist})
  }*/

  render(){

    return (
      <div>
        <Mainheader/>
          <Selectnature naturelist={this.state.listedenatures}/>
      </div>
        
      
      
    )
  }
}

export default App;
