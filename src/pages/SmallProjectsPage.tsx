import { useState } from "react";

export function SmallProjectsPage() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Small Projects</h1>
          </div>
        </div>
      </div>
      <div className="container mt-50">
        <div className="row">
          <div className="col-md-4">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0); //useState brukes som regel øverst
  // const [zelda, setZelda] = useState({name: 'Zelda', age: 2});

  // function incrementAge() {
  //   setZelda({...zelda })
  // }

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrease() {
    if (count !== 0) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="counter">
        <div className="overlay"></div>
        <h3>Simple Counter</h3>
        <h2 id="count-el">{count}</h2>
        {/* <div>{JSON.stringify(zelda)}</div>
      <button id="increment-btn" onClick={incrementAge}>Zelda</button> */}
        <div className="btns">
          <button id="decrease-btn" onClick={decrease}>
            -
          </button>
          <button id="increment-btn" onClick={increment}>
            +
          </button>
          <button id="clear-btn" onClick={() => setCount(0)}>
            CLEAR
          </button>
        </div>
      </div>
    </>
  );
}
