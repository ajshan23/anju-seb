import { useDispatch } from "react-redux"
import { addCount, minusCount } from "../store/counterSlice"



const Buttons = () => {
    const dispatch = useDispatch()

    const add = () => {
        dispatch(addCount());
        //....
    }
    const minus = () => {
        //....
        dispatch(minusCount())
    }
    return (
        <div>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default Buttons