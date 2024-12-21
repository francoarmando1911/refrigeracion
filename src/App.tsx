
import Header from './components/Header'
import './index.css'
import { Product } from './types/types';


function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-600 text-white">
        <Header
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          clearCart={clearCart}
          isEmpty={isEmpty}
          cartTotal={cartTotal}
          showCart={showCart}
          toggleCart={toggleCart}
        />

      </div>
    </>
  )
}

export default App
