import './App.css';
import image from './grocery.png';
import imageTwo from './cart.png';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='container'>
      <div className='app'>
        <img src={ image } alt="groceries" width='130px' />
        <h1>Grocery List</h1>
        <GroceryList/>
        <img src={ imageTwo } alt="grocery cart" width='280px' />
      </div>
    </div>
  );
}

export default App;
