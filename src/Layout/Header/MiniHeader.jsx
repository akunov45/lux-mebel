import { Link } from 'react-router-dom'
import PhoneIcon from "../../assets/phone-icon.svg"
import cls from './Header.module.scss'
import HeaderDelivery from '../../components/HeaderDelivery/HeaderDelivery'

const MiniHeader = () => {
  return (
    <header>
      <div className={cls.header}>
        <nav>
          <Link to="">Главная</Link>
          <Link to="">О нас</Link>
          <Link to="">Контакты</Link>
        </nav>
        <div className={cls.header__actions}>
          <img src={PhoneIcon} alt="" />
          <a href="tel:+8 (964) 89 99 119">
            8 (964) 89 99 119
          </a>
          <HeaderDelivery fillColor="white" />
        </div>
      </div>
    </header>
  )
}

export default MiniHeader