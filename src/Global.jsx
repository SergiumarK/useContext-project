import A from "./components/A"
import B from "./components/B"
import C from "./components/C"

const Global = () => {
    const text = "Hello World"

    return (
        <>
            <A myText={text} />
        </>
    )
}

export default Global