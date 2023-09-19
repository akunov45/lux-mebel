import { useEffect } from 'react'
import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as PhonIcon } from '../../assets/phone-icon.svg'
import { Button } from '../../components/ui/Buttons/Button'
import InputField from '../../components/ui/InputField/InputField'
import InputFile from '../../components/ui/InputFile/InputFile'
import TextArea from '../../components/ui/TextArea/TextArea'
import cls from './ContactPage.module.scss'

const ContactPage = () => {
  useEffect(() => {
    let map;

    DG.then(function () {
      map = DG.map("map", {
        center: [54.98, 82.89],
        zoom: 13,
      });
    });
  }, [])
  return (
    <>
      <div className={cls.contact}>
        <h4>Свяжитесь с нами</h4>
        <div className={cls.contact__form}>
          <form>
            <div className={cls.contact__form_fields}>
              <label >
                <span>Ваше имя</span>
                <InputField type={"email"} />
              </label>
              <label >
                <span>Ваш e-mail</span>
                <InputField type={"password"} />
              </label>
            </div>
            <label >
              <span>Сообщение</span>
              <br />
              <TextArea />
            </label>
            <div className={cls.contact__form_buttons}>
              <div className={cls.fileInput}>
                <label htmlFor="file-input"
                >
                  Прикрепить файл
                </label>
                <InputFile id="file-input" />
              </div>
              <Button >Отправить</Button>
            </div>
          </form>
          <div>
            <div className={cls.social}>
              <p>
                <PhonIcon stroke="black" />
                <a href="tel:+8 (964) 89 99 119">
                  8 (964) 89 99 119
                </a>
              </p>
              <p>
                <EmailIcon />
                <a href="mailto:mebel_loft_anapa@mail.ru">
                  mebel_loft_anapa@mail.ru
                </a>
              </p>
              <p>
                <InstagramIcon />
                <a href="">
                  INSTAGRAM
                </a>
              </p>
            </div>
            <p>Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море</p>
          </div>
        </div>
      </div>
      <div className={cls.contact_map}>
        <h4>
          Адрес нашей компании
        </h4>
        <div>
          <div id="map" style={{ width: "100%", height: 400 }}></div>
        </div>
      </div>
    </>
  )
}

export default ContactPage