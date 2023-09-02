 
import './App.css';
import Header from './components/Header';
import NotePage from './components/NotePage';
import { NoteListPage } from './pages/NoteListPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
   <div className='container dark'>
    <div className='app'>
      <Header/>
      <Route path="/" exact component={NoteListPage}/>
      <Route path="/note/:id" component={NotePage}/>
      </div>
   </div>
   </Router>
  );
}

export default App;

