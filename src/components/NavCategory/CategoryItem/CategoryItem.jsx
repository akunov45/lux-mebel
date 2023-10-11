import { Dropdown } from 'antd';
import PropTypes from 'prop-types';
import cls from './CategoryItem.module.scss';
import { categoryGroup } from '../../../utils/constans';



const CategoryItem = ({ itemIcon, itemText }) => {
  return (
    <Dropdown
      menu={{
        items: categoryGroup.map(el => {
          return {
            ...el,
            label: <h5 className={cls.groupName}>{el.label}</h5>
          }
        }),
        selectable: true,
        defaultSelectedKeys: ['1'],
      }}
    >
      <div className={cls.category}>

        <div>
          {itemIcon}
        </div>
        <p className={cls.category__name}>{itemText}</p>
      </div>
    </Dropdown>
  )
}

export default CategoryItem

CategoryItem.propTypes = {
  itemIcon: PropTypes.element,
  itemText: PropTypes.string.isRequired
}