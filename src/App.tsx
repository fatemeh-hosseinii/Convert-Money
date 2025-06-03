import Container from "./Components/Container/Container"
import Convert from "./Components/Convert/Convert"

function App() {
  return (
    <>
      <div className="flex w-[100%]">
        <Container>
          <Convert/>
        </Container>
      </div>
    </>
  )
}

export default App
