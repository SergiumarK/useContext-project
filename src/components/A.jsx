import { useContext } from "react"
import { Ctx } from "../Global"

const A = () => {
    const { items } = useContext(Ctx)

    return (
        <>
            {items.map((item) => (
                <p>{item.text}</p>
            ))}
        </>
    )
}

export default A