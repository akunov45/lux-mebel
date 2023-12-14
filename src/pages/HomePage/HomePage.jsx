import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../../components/Card/Card'
import {getProducts} from '../../store/productSlice/productSlice'
import './HomePage.scss'
import {Spin} from "antd";

const HomePage = () => {
  const dispatch = useDispatch()
  const {productsData, isLoaded, error} = useSelector(state => state.products)
  
  console.log(productsData)
  useEffect(() => {
    if (!productsData.length) {
      dispatch(getProducts())
    }
  }, [])
  
  
  return (
    <div>
      <section className="hero">
        <div className="hero-title">
          <h1>Loft <br/>Мебель</h1>
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
        {isLoaded && !productsData.length && <Spin/>}
        {error && <h4>{error}</h4>}
        <div className='card-block'>
          {productsData.map(({id, attributes}) => <Card {...attributes} id={id} key={id}/>)}
        </div>
      </div>
    </div>
  )
}

export default HomePage