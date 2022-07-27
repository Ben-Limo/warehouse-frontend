import './featuredInfo.css'

import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import { FeaturedInfoData } from './FeaturedInfoData';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
    {FeaturedInfoData.map((val, key) => {
        return (
                <div key={key} className="featuredItem">
                    <span className="featuredTitle">{val.title}</span>
                    <div className="featuredContainer">
                        <span className="featuredAmount"><span>Ksh.</span>{val.amount}</span>
                        <span className="featuredRate">
                            {val.rate} {val.rate <= 0 ? <ArrowDownward className='featuredIcon negative'/> : <ArrowUpward className='featuredIcon'/> }
                        </span>
                    </div>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
        )
    })}
    </div>
  );
}
