import cls from './CategoryItem.module.scss'
import PropTypes from 'prop-types'

const CategoryItem = ({ itemIcon, itemText }) => {
  return (
    <div className={cls.category}>
      <div>
        {itemIcon}
      </div>
      <p>{itemText}</p>
    </div>
  )
}

export default CategoryItem

CategoryItem.propTypes = {
  itemIcon: PropTypes.element,
  itemText: PropTypes.string.isRequired
}