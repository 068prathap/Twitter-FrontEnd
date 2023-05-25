import './HistoryList.css'
import { bibSearchIcon } from '../../utils/icongenerator';
import { closeIcon } from '../../utils/icongenerator';
import { observer } from 'mobx-react';
import { store } from '../../Mobx'

export default observer( function HistoryList(props)
{

    return (
        <div className='searchHistoryListOuter'>
            <div className='searchHistoryList'>
                <div className='searchHistoryOuter'>
                    <div className='searchHistory'>
                        <div className='historySearchIcon'>{bibSearchIcon('rgb(15, 20, 25)', '27px', '27px')}</div>
                        <div className='searchHistoryTextDiv'>
                            <p className='searchHistoryText'>{props.data}</p>
                        </div>
                        <div className='historyCloseIcon' onClick={() => {store.searchHistory.splice(props.index, 1);localStorage.setItem('exploreSearch',JSON.stringify(store.searchHistory));}}>{closeIcon('rgb(29, 155, 240)', '17.5px', '17.5px')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
})