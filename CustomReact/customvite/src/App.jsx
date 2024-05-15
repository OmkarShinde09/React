import Chai from './Component'

function App() {
  const username = "Omkar Shinde"

  return (
    <>
      <Chai/>
      <h1>Chai aur code {username}</h1>
      {/* The username is also called evaluated expression. We can't write the complete javascript in this instead we write the evaluated js expression */}
    </>
  )
}

export default App
