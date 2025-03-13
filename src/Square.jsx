import { Circle } from "./Circle"
import { Cross } from "./Cross"

const CROSS = "CROSS"
const CIRCLE = "CIRCLE"
const EMPTY = "EMPTY"

let Square = ({ position, value, take_turn }) => {
    let handleClickEvent = () => {
        if (value === EMPTY)
            take_turn(position)
    }
    return (
        <div className="bg-white w-20 h-20 flex justify-center items-center" onClick={handleClickEvent}>
            {value === CIRCLE && <Circle />}
            {value === CROSS && <Cross />}
        </div>
    )
}
export { Square }