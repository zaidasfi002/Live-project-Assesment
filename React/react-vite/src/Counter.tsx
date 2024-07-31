import { useState } from "react";

const Counter:React.FC = () => {
          const [count, setCount] = useState(0);
        
          const increment = () => {
            setCount(count + 1);
          };
        
          const decrement = () => {
            setCount(count - 1);
          };
        
          return (
            <div className="bg-gray-600  h-36 p-4 text-center mx-96 rounded-md text-gray-300 text-xl ">
              <h2>Counter</h2>
              <p>Count: {count}</p>
             
              <button className="bg-blue-500 rounded p-2 mt-3 mr-3  font-bold text-white" onClick={increment}>Increment</button>
              <button className="bg-blue-500 rounded p-2 mt-3 font-bold text-white " onClick={decrement}>Decrement</button>
            </div>
          );
        };
        
        export default Counter;