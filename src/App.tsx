import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Trong',
    last: 'Nhan'
  }

  const nameList = [
    {
      first: 'Trong',
      last: 'Nhan'
    },
    {
      first: 'Trong2',
      last: 'Nhan2'
    },
    {
      first: 'Trong2',
      last: 'Nhan2'
    },
]
  return (
    <div className="App">
      <Greet name='Trong Nhan' messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
