import './App.css';
import { useState } from 'react';
import Routes from './router/Routes'
import publicRoutes from './router/routes/publicRoutes';
function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  console.log(allRoutes)
  return <Routes allRoutes={allRoutes} />
}

export default App;
