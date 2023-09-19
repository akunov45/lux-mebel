import DeliveryPayment from './DeliveryPayment/DeliveryPayment';
import ProductCharacter from './ProductCharacter/ProductCharacter';
import Reviews from './Reviews/Reviews';
import cls from './Tabs.module.scss'
import { ConfigProvider, Tabs as AntTabs } from "antd"

const Tabs = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Характеристики',
      children: <ProductCharacter />,
    },
    {
      key: '2',
      label: 'Отзывы',
      children: <Reviews />,
    },
    {
      key: '3',
      label: 'Доставка и оплата',
      children: <DeliveryPayment />,
    },
  ];

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              lineType: 'none',
              fontFamily: "Roboto, sans-serif",
              titleFontSize: '16px',
              itemColor: "#686868",
              itemActiveColor: "#414141",
              itemSelectedColor: "#414141",
              itemHoverColor: "#414141",
              inkBarColor: '#245462;'
            }
          }
        }}>
        <AntTabs tabBarStyle={{
          marginBottom: 27
        }} tabBarGutter={50} defaultActiveKey="1" items={items} onChange={onChange} />
      </ConfigProvider>
    </div>
  )
}

export default Tabs