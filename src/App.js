import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData((prev) => [...prev, {username: "SkyzoX Codes", major: "Computer Science", description: "I'm Web Developer, Reactjs, Nextjs. My fav languages is Javascript, Python, C#, C"}])
  }, [])

  console.log(...data)
  return (
    <div className='App'>
      {
        data.map((item) => {
          return <Card username={item.username} major={item.major} description={item.description} />
        })
      }
      
    </div>
  );
}

export default App;
