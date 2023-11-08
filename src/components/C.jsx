import { useContext } from "react"
import { Ctx } from "../Global"

const C = () => {
    const myValue = useContext(Ctx)

    return (
        <>
            <h1>{myValue}</h1>
        </>
    )
}

export default C