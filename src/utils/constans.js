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

export const categoryGroup = [
  {
    key: '1',
    label: 'Модульные кухни',
  },
  {
    key: '2',
    label: 'Барная зона',
  },
  {
    key: '3',
    label: 'Кухонные уголки',
  },
  {
    key: '4',
    label: 'Обеденная зона',
  },
  {
    key: '5',
    label: 'Столешницы',
  },
  {
    key: '6',
    label: 'Стеновые панели',
  },
  {
    key: '7',
    label: 'Мойки, сушилки, смесители для кухни',
  },
  {
    key: '8',
    label: 'Дополнительная фурнитура',
  },
  {
    key: '9',
    label: 'Бытовыя техника',
  },
];