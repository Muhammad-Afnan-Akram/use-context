import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import Mainpage from "./components/context/Mainpage";


function App(){
  return(
    <div className="App">
      <ThemeContextProvider>
        <Box/>
        <Mainpage/>
      </ThemeContextProvider>
    </div>
  )
}

export default App;