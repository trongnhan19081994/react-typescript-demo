import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

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
      <Greet name='Trong Nhan' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error"/>
      <Heading> Heading text </Heading>
      <Oscar> 
        <Heading> Oscar goes to Leonardo Dicpario! </Heading>
      </Oscar>
    </div>
  );
}

export default App;
