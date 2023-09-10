import { ReactComponent as DeliveryIcon } from '../../assets/delivery-icon.svg'
import PropTypes from 'prop-types'
import "./HeaderDelivery.scss";

const HeaderDelivery = ({ fillColor, hide }) => {
  return (
    <span className={`header-delivery ${hide}`}>
      <DeliveryIcon fill={fillColor} />
      <a href=''>
        Доставка
      </a>
    </span>
  )
}

export default HeaderDelivery

HeaderDelivery.propTypes = {
  fillColor: PropTypes.string,
  hide: PropTypes.string
}