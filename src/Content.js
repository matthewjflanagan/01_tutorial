export const Content = () => {
    const handleNameChange = () => {
        const names = ['Matt', 'Vito']
        const int = Math.floor(Math.random() * 2);
        return names[int];
        }
  return (
    <main>
        Hello {handleNameChange()}!
    </main>
  )
}

export default Content;
