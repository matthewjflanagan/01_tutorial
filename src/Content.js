import { useState } from 'react';

export const Content = () => {
  const [name, setName] = useState('Matt');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
      const names = ['Matt', 'Vito']
      const int = Math.floor(Math.random() * 2);
      setName(names[int]);
      }

    const handleClick = () => {
      setCount(count + 1)
      console.log(count)
    }
    
    const handleClick2 = (name) => {
      console.log(count)
    }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  )
}

export default Content;
