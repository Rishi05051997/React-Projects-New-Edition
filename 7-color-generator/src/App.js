import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);

  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false)
      console.log(colors)
    } catch (error) {
      setError(true);
      console.log(error)
    }

  }
  return(
    <>
    <section className="container">
      <h3>Color Generator</h3>
    </section>
    <form onSubmit={handleSubmit}>
      <input type="text" className={`${error ? 'error': null}`} value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
    <section className="colors">
      {
        list.map((color, index)=> {
          return(
            < SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          )
        })
      }
    </section>
    </>
  )
}

export default App
