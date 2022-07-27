import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { salesData } from '../../dummyData'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart title="Sales Analytics" data={salesData} grid dataKey="sales"/>
      <div className='homewidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}
