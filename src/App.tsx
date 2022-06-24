import React from 'react';
import './App.css';
import { Button } from 'antd';
import { useAppSelector, useAppDispatch } from './hooks/redux';
import { increment, decrement } from './redux/counterSlice';
const App:React.FC = () => {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <h1>This is count: {count}</h1>
      <Button onClick={()=>dispatch(increment())} type="primary">+</Button>
      <Button onClick={()=>dispatch(decrement())} type="primary">-</Button>
    </div>
  );
}

export default App;