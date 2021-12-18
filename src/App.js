import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="m-3">
       <Counter Profile="Counter 1" value={1} image="images/girl.jpg"/>
       <Counter title="Dog" value={1} image="images/dog1.jpg"/>
    </div>
  );
}

export default App;
