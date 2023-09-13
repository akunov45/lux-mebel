import { DownOutlined } from '@ant-design/icons';
import { ColorPicker, InputNumber } from 'antd';
import { useState } from 'react';
import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { Button } from '../../components/ui/Buttons/Button';
import cls from './ProductInfoPage.module.scss';
import Tabs from '../../components/Tabs/Tabs';


const ProductInfoPage = () => {
  const [open, setOpen] = useState(false);
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
              <ColorPicker
                value={"#cc9f48"}
                open={open}
                onOpenChange={setOpen}
                showText={() => (
                  <DownOutlined
                    rotate={open ? 180 : 0}
                    style={{
                      color: 'rgba(0, 0, 0, 0.25)',
                    }}
                  />
                )}
              />
            </div>
            <div className={cls.product__count}>
              <p>Количество</p>
              <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
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
      <Tabs />
    </div>
  )
}

export default ProductInfoPage