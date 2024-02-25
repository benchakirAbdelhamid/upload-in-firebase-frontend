import { useCallback, useEffect, useMemo, useState } from "react";
import Toast from "./Toast";

const Hoocs = () => {
    const [count, setCount] = useState(0);
    const [hello, sethello] = useState(5251);
  
    useEffect(() => {
      if (count > 10) {
        console.log("Higher");
      } else {
        console.log("Lower");
      }
      
    }, [count]);
    // Execution
  
    const func = useCallback(() => {
      setCount((prev) => prev + 1);
      console.log(hello);
    }, [hello]);
  
    const sentence = useMemo(() => {
      return `Hello count: ${count}`;
    }, [count]);
  
    const func1 = useCallback(() => {
      sethello("Hi");
    }, []);
  
    return (
      <>
        {console.log("Yes")}
        <button onClick={func}>Click Normal</button>
        <button onClick={func1}>Click 1</button>
  
        <h1>{sentence}</h1>
        <Toast/>
      </>
    );
}

export default Hoocs