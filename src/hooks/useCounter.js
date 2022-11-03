import { useReducer } from "react";
import { reducer } from "../reducer/reducer";

function useCounter() {
    const initialState = { count: 0, value: parseInt("") };
    const [state, dispatch] = useReducer(reducer, initialState);


    function increment() {
        return dispatch({ type: "increment" });
    }

    function decrement() {
        return dispatch({ type: "decrement" });
    }

    function reset() {
        return dispatch({ type: "reset" });
    }

    function setValue(value) {
        return dispatch({ type: "setValue", payload: parseInt(value) });
    }
    return { state, increment, decrement, reset, setValue };
}

export default useCounter;