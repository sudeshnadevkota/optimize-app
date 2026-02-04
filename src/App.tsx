import { useState, useCallback, Suspense,} from 'react';
import Counter from './components/Counter';
import LazyComponent from './components/LazyComponent';
import { Button } from './components/ui/button';
import ExpensiveCalculation from './components/ExpensiveCalculation';


function App() {
  const [count, setCount] = useState(0);
  const [showLazy, setShowLazy] = useState(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="">
      <h1> React Performance Optimization</h1>
      <Counter count={count} onIncrement={increment} />
      <ExpensiveCalculation number={count || 1} />
      <Button onClick={() => setShowLazy((prev) => !prev)}>
        Toggle Lazy Component
      </Button>
      {showLazy && (
        <Suspense fallback={<div> Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}
export default App;