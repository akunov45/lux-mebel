import cls from './ProductInfoPage.module.scss'
import { ReactComponent as StarIcon } from '../../assets/star.svg'
import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg'
import { Button } from '../../components/ui/Buttons/Button'

const ProductInfoPage = () => {
  return (
    <div className={cls.productWrap}>
      <div className={cls.product}>
        <div className={cls.product__image}>
          <img src="https://avatars.mds.yandex.net/get-images-cbir/3927539/QjfaojOnQg6ifr-sFOcqWA8271/ocr" alt="" />
        </div>
        <div className={cls.product__info}>
          <div className={cls.product__stars}>
            <StarIcon fill="black" />
            <StarIcon fill="black" />
            <StarIcon fill="black" />
            <StarIcon fill="black" />
            <StarIcon fill="#D1D1D1" />
          </div>
          <h3 className={cls.product__name}>Динс Velvet Yellow</h3>
          <h6 className={cls.product__category}>Диваны</h6>
          <div className={cls.product__actions}>
            <h3 className={cls.product__price}>4 690₽</h3>
            <Button>Купить</Button>
            <div className={cls.product__favoriteBtn}>
              <HeartIcon />
              <span>Добавить в желаемое</span>
            </div>
          </div>
          <div className={cls.product__actions} style={{ alignItems: 'start' }}>
            <div className={cls.product__color}>
              <p>Цвет</p>
              <input type="color" />
            </div>
            <div className={cls.product__count}>
              <p>Количество</p>
              <input type="number"
                name="quantity"
                value={1} />
            </div>
            <div className={cls.product__sizes}>
              <p>Размер (Д × Ш × В)</p>
              <input type="text" value={"218 СМ x 95 СМ x 90 СМ"} />
            </div>
          </div>
          <div className={cls.product__description}>
            <h5>Описание</h5>
            <p>Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoPage