import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import User from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Counter from './components/state/Counter';
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
      <Button handleClick={(event, id) => console.log('Button Click', event, id)}/>
      <Input value='' handleChange={event => console.log('App', event)} />
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <Counter />

      <ThemeContextProvider>
          <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

    </div>
  );
}

export default App;
