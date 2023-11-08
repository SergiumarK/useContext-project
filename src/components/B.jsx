import { useState, useContext } from "react"
import { Ctx } from "../Global"

const B = () => {
    const [itemText, setItemText] = useState("")
    const { addItem } = useContext(Ctx)

    return (
        <>
            <input type="text" 
            value={itemText} 
            onChange={(e) => setItemText(e.target.value)}
            onKeyUp={(e) => {
                if(e.key === "Enter") {
                    addItem(itemText)
                    setItemText('')
                }
            }} 
            />
            {/* onChange = schimba valoarea lui itemText conform valorii din input  */}
            {/* onKeyUp = verifica daca apasam pe Enter pentru a putea apela functia din Context */}
        </>
    )
}

export default B