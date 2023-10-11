import { useSelector, useDispatch } from 'react-redux'
import './CartPage.scss'
import { useEffect } from 'react'
import { delItemFromCart, getFromLSCart } from '../../store/cartSlice/cartSlice'
const CartPage = () => {
  const {cartData}=useSelector(state=>state.cart)
  const dispatch=useDispatch()

  useEffect(()=>{
   dispatch( getFromLSCart())
  },[])
  console.log(cartData);
  return (
    <div >
       <div className='card-main'>
            <h2>Ваша корзина</h2>
            <p>{cartData.length} предмета</p>
       </div>
       {cartData.map(el=>{
        return (
          <>
       <div className="cart-card" key={el.id}>
        <div className="cart-img">
            <img src={el.image} alt="" />
        </div>
        <div className="card-title">
         <div className="card-title-price">
         <h3>Name {el.name}</h3>
        <div className="card-price">
            {el.price} $
        </div>
         </div>
            <span>Цвет: бежевый </span>
            <span>Количество 1</span>
            <span>Размер (Ш*Д*В): sizes</span>
        </div>
        <div className="card-del" onClick={()=>{dispatch(delItemFromCart(el.id))}}>X</div>
       </div>
       </>

        )
       })}

    </div>
  )
}

export default CartPage