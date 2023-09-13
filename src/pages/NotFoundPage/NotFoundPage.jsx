import { Result } from 'antd'
import { Button } from '../../components/ui/Buttons/Button'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="К сожалению, страница, которую вы посетили, не существует."
        extra={
          <Button >
            <Link to={'/'} style={{ color: '#fff' }}>На Главную</Link>
          </Button>}
      />
    </div>
  )
}

export default NotFoundPage