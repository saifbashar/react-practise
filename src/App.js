import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Saif Bashar';
  const singer = {
    name: 'Dr Mahfuz',
    profession: 'Actor',
  };
  const singer2 = {
    name: 'Eva Rahman',
    profession: 'Kokil Konthi Eva',
  };
  const singerStyle = {
    backgroundColor: 'green',
    color: 'white',
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>Yoo React Mama</h3>
        <p>Happy Reacting</p>
        <div className="container">
          <h1>Hello {name}</h1>
          <p
            style={{
              backgroundColor: 'black',
              color: 'white',
            }}
          >
            Singer {singer.name + ' ' + singer.profession}
          </p>
          <p style={singerStyle}>
            Singer {singer2.name + ' ' + singer2.profession}
          </p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Look Mama I can write react</h1>
      </header>
    </div>
  );
}

export default App;
