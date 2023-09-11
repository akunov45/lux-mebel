import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as PhonIcon } from '../../assets/phone-icon.svg'

import cls from './Footer.module.scss'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={cls.footer__navigation}>
          <h3>НАВИГАЦИЯ</h3>
          <div>
            <ul>
              <li>Кухни</li>
              <li>Спальни</li>
              <li>Гостинные</li>
            </ul>
            <ul>
              <li>Прихожие</li>
              <li>Офисная мебель</li>
              <li>Детская</li>
            </ul>
            <ul>
              <li>Шкафы</li>
              <li>Матрасы</li>
              <li>Мягкая мебель</li>
            </ul>
          </div>
        </div>
        <div className={cls.footerAddress}>
          <h3 className={cls.lm}>LM</h3>
          <p>
            г. Анапа, Анапское шоссе,
            30 Ж/К Черное море
          </p>
        </div>
      </div>
      <div className='container'>
        <div className={cls.promotion}>
          <a href="">Акция</a>
          <a href="">Новинки</a>
        </div>
        <div className={cls.footer__actions}>
          <p>
            <PhonIcon stroke="black" />
            <a href="tel:+8 (964) 89 99 119">
              8 (964) 89 99 119
            </a>
          </p>
          <p>
            <InstagramIcon />
            <a href="">
              INSTAGRAM
            </a>
          </p>
          <p>
            <EmailIcon />
            <a href="mailto:mebel_loft_anapa@mail.ru">
              mebel_loft_anapa@mail.ru
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer