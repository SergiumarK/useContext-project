import A from "./components/A"
import B from "./components/B"
import C from "./components/C"

import { createContext } from "react"

export const Ctx = createContext()

const Global = () => {
    
    return <></>
}

export default Global

// scopul contextului este o functie care ne permite sa cream o variabila, valoarea careia va putea fi apelata din oricate component a aplicatiei noastre