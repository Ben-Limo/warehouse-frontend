import './featured.scss'

import {MoreVert, KeyboardArrowDown, KeyboardArrowUpOutlined} from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featured-top">
            <h1 className="title">Total Revenue</h1>
            <MoreVert fontSize='small'/>
        </div>
        <div className="featured-bottom">
            <div className="featured-bottom__chart">
                <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>ksh. 2432.34</p>
            <p className='description'>Only approved transactions included</p>
            <div className="featured-bottom__summary">
                <div className="featured-bottom__summary__item">
                    <div className="summary-item__title">
                        Target
                    </div>
                    <div className="summary-item__result negative">
                        <KeyboardArrowDown fontSize='small'/>
                        <div className="result-amount">
                            ksh. 43934.43
                        </div>
                    </div>
                </div>
                <div className="featured-bottom__summary__item">
                    <div className="summary-item__title">
                        Last Week
                    </div>
                    <div className="summary-item__result positive">
                        <KeyboardArrowUpOutlined fontSize='small'/>
                        <div className="result-amount">
                            ksh. 43934.43
                        </div>
                    </div>
                </div>
                <div className="featured-bottom__summary__item">
                    <div className="summary-item__title">
                        Last Month
                    </div>
                    <div className="summary-item__result negative">
                        <KeyboardArrowDown fontSize='small'/>
                        <div className="result-amount">
                            ksh. 43934.43
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Featured
