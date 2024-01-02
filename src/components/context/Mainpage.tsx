import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Mainpage=()=>{
    const theme1=useContext(ThemeContext);
    return(
    
    <div style={{
        color:theme1.primary.main,
        backgroundColor:theme1.secondary.main
        
    }}>
        Afnan
    </div>
    )
}
export default Mainpage;