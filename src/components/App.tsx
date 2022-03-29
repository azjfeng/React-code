import React, { Profiler, Suspense } from "react";
import Test from './Test'
import Move from './Move'
function App() {
  const callBack = (...args) => {
    console.log(args)
  }
  return <div className="app">
    aaa
    <Profiler id="Test" onRender={callBack}>
      <Test />
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
        <Test />
        <Move />
      </Suspense>
    </Profiler>
  </div>
}

export default App