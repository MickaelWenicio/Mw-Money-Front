import  GlobalStyle from "./Styles/Global.ts"
import Header from "./components/Header/index.tsx"
import Dashboard from "./components/Dashboard/index.tsx"

function App() {

  return (
    <>
      <Header/>
      <GlobalStyle/>
      <Dashboard />
    </>
  )
}

export default App
