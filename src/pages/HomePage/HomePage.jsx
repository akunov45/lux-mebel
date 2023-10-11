import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import { getProducts } from '../../store/productSlice/productSlice'
import './HomePage.scss'

const HomePage = () => {
  const dispatch = useDispatch()
  const { productsData, isLoaded, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  },[])


  if (isLoaded == true) {
    return <h2>Loading....</h2>
  }
  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <section className="hero" >
        <div className="hero-title">
          <h1>Loft <br />Мебель</h1>
          <div className="hero-title-desc">
            Современная и удобная мебель в Анапе
          </div>
          <p className='small-desc'>С доставкой по
            Краснодарскому краю</p>
          <button className='hero-btn'>СМОТРЕТЬ КАТАЛОГ</button>
        </div>
      </section>
      <div>
        <h3 className='bestsellers'>Хиты продаж</h3>
        <div className='card-block'>
          {productsData.map(el => <Card {...el} key={el.id} />)}
        </div>
      </div>
    </div>
  )
}

export default HomePage