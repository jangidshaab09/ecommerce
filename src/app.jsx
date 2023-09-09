import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts , addToCart} from './slice'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function App() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.ecommerce;
  });
  console.log(init.cart)

  useEffect(() => {
    dispatch(getProducts())
  }, [])


  if (init.isLoading === false) {
    return <div className='Loader'>Loading... </div>
  }
  else {
    return (
      <>
        <div className='products'>
          {init.products.map((product, index) => {
            return (
              <>
                <div className='product' key={index}>
                  <img src={product.image} alt="" />
                  <h2>{product.title}</h2>
                  <p><MonetizationOnIcon/>{product.price}</p>
                  <button onClick={()=>dispatch(addToCart(product))}> Add to Cart </button>


                </div>
              </>
            )

          })
          };
        </div>
      </>
    );
  }
}

export default App
