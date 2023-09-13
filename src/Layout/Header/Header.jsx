import MiniHeader from "./MiniHeader"
import cls from './Header.module.scss'
import Logo from '../../assets/logo.svg'
import InputField from "../../components/ui/InputField/InputField"
import HeaderDelivery from "../../components/HeaderDelivery/HeaderDelivery"
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu"
import { ReactComponent as BasketIcon } from '../../assets/basket-icon.svg'
import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg'


const Header = () => {

  return (
    <>
      <MiniHeader />
      <div className="container">
        <div className={cls.main__header}>
          <BurgerMenu />
          <div>
            <img src={Logo} alt="app logo" />
          </div>
          <div className={cls.searchInput}>
            <span className={cls.searchIcon}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15L11 11M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z" stroke="black" />
              </svg>
            </span>
            <InputField type="text" hint="Поиск" />
          </div>
          <div className={cls.userActions}>
            <HeaderDelivery hide="hide" fillColor="black" />
            <span>
              <HeartIcon />
            </span>
            <span>
              <BasketIcon />
            </span>
            <span>
              <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.2924 4.85714C11.2924 6.98757 9.56458 8.71428 7.43276 8.71428C5.30094 8.71428 3.5731 6.98757 3.5731 4.85714C3.5731 2.72671 5.30094 1 7.43276 1C9.56458 1 11.2924 2.72671 11.2924 4.85714Z" stroke="black" strokeLinecap="square" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.8655 19H1C1 18.0865 1 17.2174 1 16.4304C1 14.2988 2.72803 12.5714 4.85966 12.5714H10.0059C12.1375 12.5714 13.8655 14.2988 13.8655 16.4304C13.8655 17.2174 13.8655 18.0865 13.8655 19Z" stroke="black" strokeLinecap="square" />
              </svg>
            </span>
          </div>
        </div>
        <div className={cls.searchInput320}>
          <span className={cls.searchIcon}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15L11 11M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z" stroke="black" />
            </svg>
          </span>
          <InputField type="text" hint="Поиск" />
        </div>
      </div>
    </>
  )
}

export default Header