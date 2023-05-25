import './ScoreTable.css'

export default function ScoreTable()
{
    return(
        <div className='scoreTable'>
            <div className='tableHeadingOuter'>
                <div className='tableHeading'>
                    <p className='tableRightHaeding'>NBA</p>
                    <p className='tableLeftHeading'>Final - DEN won</p>
                </div>
                <div className='teamTableOuter'>
                    <div className='teamTable'>
                        <div className='teamDetailsOuter team1'>
                            <div className='teamDetails'>
                                <img className='teamLogo' src="https://pbs.twimg.com/semantic_core_img/1182642106906464257/BnqiWFrU?format=png&name=120x120"/>
                                <p className='teamName'>Denver Nuggets</p>
                            </div>
                            <div className='teamScoreDiv'>
                                <p className='teamScore'>119</p>
                            </div>
                        </div>
                        <div className='teamDetailsOuter team2'>
                            <div className='teamDetails'>
                                <img className='teamLogo' src="https://pbs.twimg.com/semantic_core_img/1182642107720163330/v8MlCOF8?format=png&name=120x120"/>
                                <p className='teamName'>Los Angeles Lakers</p>
                            </div>
                            <div className='teamScoreDiv'>
                                <p className='teamScore team2Score'>108</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}