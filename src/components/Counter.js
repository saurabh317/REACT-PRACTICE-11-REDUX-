import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showDiv);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler =()=>{
    dispatch(counterActions.increment());
    
  }

  const decrementHandler =() =>{
    dispatch(counterActions.decrement());
    
  }

  const decreaseHandler =() =>{
    dispatch(counterActions.decrease(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decreaseHandler}>decrement by 5</button>
      </div>
    </main>
  );
};

export default Counter;
