import './App.css'
import Todolist from './components/Todolist';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

function App() {

  return (
    <Container maxWidth="lg">
      <Todolist />
    </Container>
  )
}

export default App
