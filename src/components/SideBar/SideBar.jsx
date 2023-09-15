import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { headerMenu, navItems } from '../../utils/constans'
import cls from './SideBar.module.scss'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { burgerFixed } from '../../store/navbarSlice/navbarSlice'

const MenuItem = ({ SVGIcon, label, to }) => {
  return (
    <div className={cls.flex}>
      <div className={cls.flex__item}>
        <SVGIcon />
      </div>
      <div className={cls.flex__item}>
        <h6>
          <Link to={to}>
            {label}
          </Link>
        </h6>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  SVGIcon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string
}

const SideBar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(burgerFixed("fixed"))
    return () => {
      dispatch(burgerFixed(""))
      console.log('unmount');
    }
  }, [dispatch])

  return (
    <div className={cls.overlay}>
      <div className={cls.sideBarWrap}>
        <h2 className={cls.sideBarTitle}>Меню</h2>
        <div className={cls.menu}>
          {headerMenu.map(({ SvgIcon, name, linkTo }, index) => (
            <MenuItem SVGIcon={SvgIcon} label={name} to={linkTo} key={index} />
          ))}
        </div>
        <h2 className={cls.sideBarTitle}>Категории</h2>
        <div >
          {navItems.map(({ SvgIcon, categoryName, linkTo = "" }, index) => (
            <MenuItem SVGIcon={SvgIcon} label={categoryName} to={linkTo} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar