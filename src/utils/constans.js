import icons from '../assets/nav-icons'
import { ReactComponent as HomeIcon } from '../assets/home-icon.svg'
import { ReactComponent as AboutIcon } from '../assets/about-icon.svg'
import { ReactComponent as ContactIcon } from '../assets/contact-icon.svg'
export const navItems = [
  {
    SvgIcon: icons.KitchenIcon,
    categoryName: "Кухни"
  },
  {
    SvgIcon: icons.BedroomIcon,
    categoryName: "Спальни"
  },
  {
    SvgIcon: icons.LivingRoomIcon,
    categoryName: "Гостинные"
  },
  {
    SvgIcon: icons.ClosetIcon,
    categoryName: "Прихожие"
  },
  {
    SvgIcon: icons.OfficeIcon,
    categoryName: "Офисная мебель"
  },
  {
    SvgIcon: icons.ChildrensRoomIcon,
    categoryName: "Детская"
  },
  {
    SvgIcon: icons.PromotionIcon,
    categoryName: "Акция"
  },
  {
    SvgIcon: icons.NewProductIcon,
    categoryName: "Новинки"
  },
  {
    SvgIcon: icons.MattressIcon,
    categoryName: "Матрасы"
  },
  {
    SvgIcon: icons.ArmChairIcon,
    categoryName: "Мягкая мебель"
  },
  {
    SvgIcon: icons.CupBoardIcon,
    categoryName: "Шкафы"
  },
]
export const headerMenu = [
  {
    SvgIcon: HomeIcon,
    name: "Главная",
    linkTo: "/",
  },
  {
    SvgIcon: AboutIcon,
    name: "О нас",
    linkTo: "/about-us",
  },
  {
    SvgIcon: ContactIcon,
    name: "Контакты",
    linkTo: "/contact",
  },
]