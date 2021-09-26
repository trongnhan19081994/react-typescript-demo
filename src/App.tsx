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
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import Counter from './components/state/Counter';
import Status from './components/Status';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

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
      <br/>
      <Button handleClick={(event, id) => console.log('Button Click', event, id)}/>
      <br/>
      <Input value='' handleChange={event => console.log('App', event)} />
      <br/>
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <br/>
      <Counter />
      <br/>
      <ThemeContextProvider>
          <Box />
      </ThemeContextProvider>
      <br/>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <br/>
      <DomRef />
      <br/>
      <MutableRef />
      <br/>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
