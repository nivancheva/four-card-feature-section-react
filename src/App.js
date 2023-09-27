import './App.css';
import { useState } from 'react';
import dataJson from './data.json';
import Cards from './Cards';

function App() {
  const [cards] = useState(dataJson)

  return (
    <main className='wraper'>
      <div className='container'>
        <div className='title'>
          <h1>Reliable, efficient delivery<span>Powered by Technology</span></h1>
          <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>

        <div className='card-container'>
          {cards.map((card, idx) => {
            return (
              <Cards key={idx} {...card}/>
            )
          })}
        </div>
        
      </div>
    </main>
  );
}

export default App;
