import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import { useDispatch, useSelector } from 'react-redux';
import { populateProduce } from './store/produce';
import { addToCart } from './store/cart';
import { hideCartAction, showCart, showCartAction } from './store/showCart';
import { Store } from 'redux';

function App() {
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(populateProduce());
  }, [dispatch]);


  const cartShow = useSelector((state)=> state.cartShow)
  useEffect(()=> {
    setShowCart(cartShow)
  }, [cartShow])



  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => setShowCart(dispatch(showCartAction()))}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(dispatch(hideCartAction()))}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
