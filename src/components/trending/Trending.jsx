import './Trending.css';
import TrendingList from '../TrendingList/TrendingList';

export default function Trending(props)
{
    return(
        <div className='TrendingListOuter'>
            <div className='TrendingList'>
                <TrendingList className={props.className}/>
            </div>
        </div>
    )
}