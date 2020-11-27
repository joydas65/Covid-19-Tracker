import './App.css';
import { useState, useEffect } from 'react';
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'
import Summary from './components/Summary'

function App() {

  const [coronaData, setCoronaData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch('https://corona.lmao.ninja/v2/countries')
      const data = await res.json()

      setCoronaData(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <Header />
      { !loading ? <Map coronaData={coronaData} /> : <Loader /> }
      <Summary coronaData={coronaData} />
    </div>
  );
}

export default App;
