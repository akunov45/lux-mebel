import { useEffect } from 'react'
import Card from '../../components/Card/Card'
import './HomePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/productSlice/productSlice'
const HomePage = () => {
  const dispatch=useDispatch()
  const {productsData, isLoaded, error}=useSelector(state=>state.products)
  console.log(productsData);
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  if (isLoaded==true){
    return <h2>Loading....</h2>
  }
  if(error){
    return <h2>{error}</h2>
  }

  return (
    <div>
    <section className="hero" >
      <div className="hero-img"  >

      </div>
      <div className="hero-title">
        <h1>Loft <br />Мебель</h1>
        <div className="hero-title-desc">
          Современная и удобная мебель в Анапе
        </div>
        <button className='hero-btn'>СМОТРЕТЬ КАТАЛОГ</button>
      </div>
    </section>
    <div className='card-block'>
      {productsData.map(el=><Card {...el} key={el.id}/>)}
    </div>

    </div>
  )
}

export default HomePage