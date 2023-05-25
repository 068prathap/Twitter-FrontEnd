import './PolicyFooter.css'
import { threeDot } from '../../utils/icongenerator'

export default function policyFooter()
{
    return(
        <div className='policyListOuter'>
            <div className='policyList'>
                <div className='policyNameDiv'>
                    <p className='policyName'>Terms of Service</p>
                </div>
                <div className='policyNameDiv'>
                    <p className='policyName'>Privacy Policy</p>
                </div>
                <div className='policyNameDiv'>
                    <p className='policyName'>Cookie Policy</p>
                </div>
                <div className='policyNameDiv'>
                    <p className='policyName'>Accessibility</p>
                </div>
                <div className='policyNameDiv'>
                    <p className='policyName'>Ads info</p>
                </div>
                <div className='moreOption'>
                    <div className='moreOptionTextDiv'>
                        <p className='moreOptionText'>More</p>
                    </div>
                    <div className='moreOptionIconDiv'>
                        <div className='moreOptionIcon'>{threeDot('rgb(83, 100, 113)','16px','12px')}</div>
                    </div>
                </div>
                <div className='policyDateDiv'>
                    <p className='policyDate'>@ 2023 X Corp.</p>
                </div>
            </div>
        </div>
    )
}