import './App.css'
import Products from './components/Products/Products'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import { CartContextProvider } from './store/CartContextProvider'

function App() {
  return (
    <CartContextProvider>
      <Products />
      <ShoppingCart />
    </CartContextProvider>
  )
}

export default App
