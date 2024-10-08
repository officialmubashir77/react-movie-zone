import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Movie from './pages/MovieZone/Movie'
import { CustomNavbar } from './components/CustomNavbar';
import { BottomFooter } from './components/BottomFooter';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
  <>
    <CustomNavbar onSearch={handleSearch} />
    <Movie searchQuery={searchQuery}/>
    <BottomFooter/>
  </>
  )
}

export default App
