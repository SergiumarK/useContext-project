import A from "./components/A"
import B from "./components/B"
import C from "./components/C"
import { v4 as uuidv4 } from "uuid"

import { createContext } from "react"
import { useState } from "react"

export const Ctx = createContext()

const Global = () => {
    const [items, setItems] = useState([
        {
            id: uuidv4(),
            text: "programming is fun"
        },
        {
            id: uuidv4(),
            text: "Game Over World"
        }
    ])

    const addItem = (item) => {
        setItems([...items, { id: uuidv4(), text: item }])
    }

    return (
        <>
            <Ctx.Provider value={{ items: items, addItem: addItem }}>
                <A />
                <B />
                <C />
            </Ctx.Provider>
        </>
    )
    
}

export default Global

// scopul contextului este o functie care ne permite sa cream o variabila, valoarea careia va putea fi apelata din oricate component a aplicatiei noastre