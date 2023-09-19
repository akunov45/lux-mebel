import { FloatButton } from 'antd';
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar/SideBar";
import AppRoutes from "../routes/Routes";
import './App.scss';

const App = () => {
  const { isActive } = useSelector(state => state.navbar)
  return (
    <div >
      <AppRoutes />
      {isActive && <SideBar />}
      <FloatButton.BackTop visibilityHeight={500} />
    </div>
  )
}

export default App