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
import List from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import Toast from './components/templateliterals/Toast';
import CustomButton from './components/html/Button';
import Text from './components/polymorphic/Text';

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
      <br/>
      <List 
        items={['Batman', 'Superman','Wonder man']}
        onClick={(item) => console.log(item)} 
      />
      <br/>
      <List 
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)} 
      />
      <br/>
      {/* <List 
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Bruce 2',
            last: 'Wayne 2'
          },
          {
            id: 3,
            first: 'Bruce 3',
            last: 'Wayne 3'
          },
        ]}
        onClick={(item) => console.log(item)} 
      /> */}

      <RandomNumber 
        value={10}
        isPositive
      />
      <br/>

      <Toast position='center' />
      <br/>
      <CustomButton variant="primary" onClick={() => console.log('Clicked')}> 
        Primary Button 
      </CustomButton>
      <br/>
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someID" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
