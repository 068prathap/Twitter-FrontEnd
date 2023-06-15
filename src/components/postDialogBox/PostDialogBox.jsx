import './PostDialogBox.css'
import { sadEmoji } from '../../utils/icongenerator'

export default function PostDialogBox()
{
    return(
        <div className='postDialogBoxOuter'>
            <div className='postDialogBox'>
                <div className='dialogOptionDiv'>
                    <div className='dialogEmoji'>{sadEmoji('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                    <p className='dialogOption'>Not interested in this Tweet</p>
                </div>
                <div className='dialogOptionDiv'>
                    <div className='dialogEmoji'>{sadEmoji('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                    <p className='dialogOption'>Follow @PrimeVideoIN</p>
                </div>
                <div className='dialogOptionDiv'>
                    <div className='dialogEmoji'>{sadEmoji('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                    <p className='dialogOption'>Add/remove @PrimeVideoIN from Lists</p>
                </div>
                <div className='dialogOptionDiv'>
                    <div className='dialogEmoji'>{sadEmoji('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                    <p className='dialogOption'>Mute @PrimeVideoIN</p>
                </div>
                <div className='dialogOptionDiv'>
                    <div className='dialogEmoji'>{sadEmoji('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                    <p className='dialogOption'>Block @PrimeVideoIN</p>
                </div>
                <div className='dialogOptionDiv'>
                    <div className='dialogEmoji'>{sadEmoji('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                    <p className='dialogOption'>Embed Tweet</p>
                </div>
                <div className='dialogOptionDiv'>
                    <div className='dialogEmoji'>{sadEmoji('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                    <p className='dialogOption'>Report Tweet</p>
                </div>
            </div>
        </div>
    )
}