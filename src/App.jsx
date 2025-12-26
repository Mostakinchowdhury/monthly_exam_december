import './App.css';
import { useReducer } from 'react';
import { reducer } from './utility/reducers';

function App() {
  // const [count, setCount] = useState(0);
  const [{ count }, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <main className="bg-[#C038C5] h-screen w-full flex items-center justify-center">
      <div className="bg-white p-5 rounded-2xl w-[420px] box-border flex flex-col gap-4 items-stretch ">
        <h2 className="text-2xl font-bold text-black text-center">
          CodeJogot Counter App
        </h2>
        {/* count value */}
        <div className="h-20 rounded-xl bg-linear-to-r from-[#4976F1] to-[#8C1DE3] text-white font-extrabold text-3xl text-center flex items-center justify-center">
          <h1> {count}</h1>
        </div>
        {/* increment and decrement */}
        <div className="flex gap-2.5 items-center justify-between grow">
          <button
            onClick={() => dispatch({ type: 'decrement' })}
            className="bg-red-500 h-[50px] grow px-3 py-2 rounded-lg text-white font-semibold"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: 'increment' })}
            className="bg-green-500 h-[50px] grow px-3 py-2 rounded-lg text-white font-semibold"
          >
            Increment
          </button>
        </div>
        {/* add 5 */}
        <button
          onClick={() => dispatch({ type: 'incrementBy5' })}
          className="bg-blue-500 h-[50px] px-3 py-2 rounded-lg text-white font-semibold"
        >
          +5 Add Five
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="bg-black/40 px-3 py-2 rounded-lg h-[50px] text-white font-semibold"
        >
          Reset
        </button>
        <div className="bg-[#F3F3F6] px-3 py-2 rounded-lg text-black font-semibold text-center h-[50px] flex items-center justify-center text-[16px]">
          <h2> Simple Counter create by useReducer</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
