import { useSelector } from "react-redux"


const View = () => {
    const count = useSelector((state) => state.count);
    return (
        <div>counter:{count}</div>
    )
}

export default View