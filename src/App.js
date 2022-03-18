import './App.css';
import { useState } from 'react';
import List from './components/List';
import Form from './components/Form';


function App() {

  const [list, setList] = useState(null);

  const api = async() => {
    const api = await fetch('http://localhost:8080/api/tutorials');
    const data = await api.json();
    setList(data);
  }

  const [semaforo, setSemaforo] = useState(false);

  const published = async() => {
    
    if(semaforo){
      api();
      setSemaforo(false);
    } else {
      const api = await fetch('http://localhost:8080/api/tutorials/published');
      const data = await api.json();
      setList(data);
      setSemaforo(true);
    }
    console.log(semaforo);
  }


  function home(){
    setList(null);
  }

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li onClick={home}>Home</li>
            <li onClick={api}>List</li>
          </ul>
        </nav>
      </header>
      <main>
        {list ? (
          <>
          <span className='publicados' onClick={published}>{semaforo ? (<>TODOS</>) : (<>PUBLICADOS</>)}</span>
            <List list={list} />
          </>
        ) :(
          <>
            <Form />
          </>
        )} 
      </main>
    </div>
  );
}

export default App;
