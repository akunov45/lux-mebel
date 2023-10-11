import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import './FavPage.scss';

const FavPage = () => {
    const {cartData}=useSelector(state=>state.cart)
  return (
    <div>
        {cartData.map(el=>{
            return (
                <>
                <Card {...el} key={el.id} />

            </>
            )

        })}
    </div>
  )
}

export default FavPage