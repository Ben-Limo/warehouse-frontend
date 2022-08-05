
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Widget from '../../components/widget/Widget'

import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Topbar />
        <div className="home-container__widgets">
          <Widget type="transaction"/>
          <Widget type="sale"/>
          <Widget type="product"/>
          <Widget type="customer"/>
        </div>
        <div className="home-container__charts">
          <Featured />
          <Chart />
        </div>

      </div>
    </div>
  )
}

export default Home