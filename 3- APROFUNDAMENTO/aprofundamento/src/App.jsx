

import { useState } from 'react';
import './App.css';
import City from "./assets/Toquio.jpg";
import CatDetails from './components/CatDetails';
import ChangeMessageStage from './components/ChangeMessageStage';
import CondtionalRender from './components/CondtionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import FragmentDefinity from './components/FragmentDefinity';
import ListRender from './components/ListRender';
import MenageData from './components/MenageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';


function App() {
  const name = "Oliver"

  const cats = [
    {id: 1, name: "Link", color: "Tigrado", personality: "Papai", grande: true},
    {id: 2, name: "Zelda", color: "Tigrado", personality: "Mamãe", grande: true},
    {id: 3, name: "Zoro", color: "Tigrado", personality: "Bolota", grande: true}
  ]

  function showMessage(){
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg);
  }


  return (
    <div className="App">
      <h1> Aprofundamento em React</h1>
      {/* Imagem em Public */}
      <div>
        <img src="/Canoa.jpg" alt= "Praia"/>
      </div>
      <div>
      <img src={City} alt= "Cidade"/>
      </div>

    <MenageData/>
    <ListRender/>
    <CondtionalRender/>

    {/* Props*/}
    <ShowUserName name= {name}/>

    {/* Destructing*/}

    <CatDetails name="Oliver" color="laranja" personality = "ranzinza" grande = {true}/>

    {/* Reaproveitando dados */}

    <CatDetails name="Charlotte" color="tigradinha" personality = "diva" grande = {false}/>
    <CatDetails name="Robin" color="tigradinha" personality = "brigona" grande = {false}/>

    {/* Loop em array de objetos */}

    {cats.map((cat) => (
      <CatDetails
        key={cat.id}
        name={cat.name}
        color={cat.color}
        personality={cat.personality}
        grande={cat.grande}
      />
    ))}

    <FragmentDefinity propFragment = 'teste'/>

    {/* Children */}

    <Container myValue='5'>
      <p> Este é o texto</p>
    </Container>

    {/* Executar função */}

    <ExecuteFunction myFunction = {showMessage} />


    {/* State Lift */}

    <Message msg={message}/>
    <ChangeMessageStage handleMessage={handleMessage}/>

    </div>
    
  );
}

export default App;
