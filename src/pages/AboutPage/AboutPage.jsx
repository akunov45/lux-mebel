import { useEffect } from 'react'
import cls from './AboutPage.module.scss'
import { useDispatch } from 'react-redux'
import { setIsHiddenNav } from '../../store/navbarSlice/navbarSlice'
import { ReactComponent as NicePriceIcon } from '../../assets/nice-price-icon.svg'
import { ReactComponent as CarDeliveryIcon } from '../../assets/car-delivery-icon.svg'
import { ReactComponent as SaveTimeIcon } from '../../assets/save-time-icon.svg'
import { ReactComponent as ManufacturingIcon } from '../../assets/manufacturing-icon.svg'

const BuyItem = ({ SVGIcon, title, text }) => {
  return (
    <div className={cls.buyFlex}>
      <div>
        <SVGIcon />
      </div>
      <div className={cls.buyFlex__item}>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  )
}

const imgUrl = "https://novacancy-atl.com/wp-content/uploads/2021/03/NoVacancyHomeStaging_RentingDecorforaHome.png"
const AboutPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // mount
    dispatch(setIsHiddenNav(true))
    return () => {
      // unmount
      dispatch(setIsHiddenNav(false))
    }
  }, [dispatch])

  return (
    <>
      <div className={cls.aboutWrap}>
        <div className={cls.theStore}>
          <h5>О магазине</h5>
          <h2>Интернет-магазин «Лофт Мебель»:
            купите хорошую
            мебель в один клик!
          </h2>
          <p>Уникальный формат интернет-магазина позволит вам купить лучшую
            мебель крупнейших российских фабрик максимально быстро и по
            выгодной цене!
          </p>
          <p>
            Мы благодарим за доверие более десятка производителей, которые дали
            нам возможность представлять лучшие образцы их продукции в
            российском интернет-пространстве. Прямые договоры на поставку
            мебели с фабрик обеспечивают наиболее привлекательные условия для
            наших покупателей.
          </p>
        </div>
        <div className={cls.theStoreImg}>
          <img src={imgUrl} alt="img" />
        </div>
      </div>
      <div className={cls.buyProfit}>
        <h3>Покупайте с выгодой!</h3>
        <div className={cls.buyFlexOne}>
          <div>
            <BuyItem SVGIcon={NicePriceIcon}
              title="Лучшая цена"
              text="Предлагаем близкие к оптовым цены, которые дают возможность приобретать мебель дешевле, чем в розничных салонах и шоу-румах." />
            <BuyItem SVGIcon={SaveTimeIcon}
              title="Экономие времени"
              text="Не нашли оптимальный вариант или нет времени на поиски? Оставьте онлайн-заявку с критериями, и мы предложим вам несколько достойных образцов." />
          </div>
          <div>
            <BuyItem SVGIcon={CarDeliveryIcon}
              title="Прямые поставки"
              text="С ведущих мебельных фабрик уменьшают срок выполнения вашего заказа, даже если речь идет об изготовлении предметов по
индивидуальному проекту.
" />
            <BuyItem SVGIcon={ManufacturingIcon}
              title="Изготовление на заказ"
              text="Принимаем заявки на изготовление мебели по персональному дизайн-проекту от покупателей из любой точки России.
Просим быть готовыми к авансированной оплате персональных заказов." />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage