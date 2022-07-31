export const Content = () => {
    const handleNameChange = () => {
        const names = ['Matt', 'Vito']
        const int = Math.floor(Math.random() * 2);
        return names[int];
        }

    const handleClick = () => {
      console.log('you clicked it!')
    }
  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>Click it</button>
    </main>
  )
}

export default Content;
