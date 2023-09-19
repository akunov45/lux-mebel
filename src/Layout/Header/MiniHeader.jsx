import { Link } from 'react-router-dom'
import { ReactComponent as PhonIcon } from "../../assets/phone-icon.svg"
import cls from './Header.module.scss'
import HeaderDelivery from '../../components/HeaderDelivery/HeaderDelivery'
import { headerMenu } from '../../utils/constans'

const MiniHeader = () => {
  return (
    <header>
      <div className={cls.header}>
        <nav>
          {headerMenu.map((menu, index) => <Link to={menu.linkTo} key={index}>{menu.name}</Link>)}
        </nav>
        <div className={cls.header__actions}>
          <PhonIcon stroke="white" />
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