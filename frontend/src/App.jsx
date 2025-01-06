import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [uptmemonitorurls, setuptimemonitorurls] = useState(0)

  function getUptimeMonitorURL() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setuptimemonitorurls(data);
      });
  }
  useEffect(() => {
    getUptimeMonitorURL();
  }, []);
  return (
    <>
     <div>
      {uptmemonitorurls ? uptmemonitorurls : 'There is no uptimemonitoring url detail available'}
      <br />
      </div>
    </>
  )
}

export default App
