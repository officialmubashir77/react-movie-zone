import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movie from './pages/MovieZone/Movie'

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
  <>
    <Navbar onSearch={handleSearch} />
    <Movie searchQuery={searchQuery}/>
  </>
  )
}

export default App
