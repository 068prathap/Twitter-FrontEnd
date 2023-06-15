import './EditProfile.css';
import { closeIcon } from '../../utils/icongenerator';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import addProfile from '../../icons/addProfile.svg'
import removeProfile from '../../icons/removeProfile.svg'
import { useRef, useState } from 'react';
import GetInput from '../getInput/GetInput';
import VerifcationInput from '../verificationInput/VerificationInput';
import { Dialog } from '@material-ui/core';
import Dob from '../selection/Selection';
import { downArrow } from '../../utils/icongenerator';
import { changeUserData } from '../../utils/EditProfile';
import { ProfileTabApi } from '../../utils/ProfileTabApi';
import { ApiCall } from '../../utils/ApiCall';

export default observer(function EditProfile(props)
{
    const [headImg, setHeadImg] = useState(store.profileHeaderImg);
    const [Img, setImg] = useState(store.profileImg);
    const [name, setName] = useState(store.profileName);
    const headerImageInput = useRef();
    const codeInput = useRef();
    const [buttonChange, setButtonChange] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const [bio, setBio] = useState(store.profileBio);
    const [location, setLocation] = useState(store.profileLocation)
    const [website, setWebsite] = useState('nill');
    const [DOB, setDOB] = useState(store.profileDOB);
    const [DOBEditDialog, setDOBEditDialog] = useState(false);
    const [confrimEditProfile, setConfrimEditProfile] = useState(false);
    let years = [];
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);
    const [year, setYear] = useState(null);
    const [monthAndYearVisible, setMonthAndYearVisible] = useState('You follow each Other');
    const [yearVisible, setYearVisible] = useState('Only you');
    const [userdata,setUserData]=useState();

    years.push('');
    for (var i = 2023; i >= 1903; i--) {
        years.push(i);
    }

    return (
        <div className='editProfileOuter'>
            <div className='editProfile'>
                <div className='editProfileHeaderOuter'>
                    <div className='editProfileHeader'>
                        <div className='editProfileCloseIcon' onClick={()=>{props.setEditProfile(false)}}>{closeIcon('rgb(15, 20, 25)', '19px', '19px')}</div>
                        <div className='editProfileTitleDiv'>
                            <p className='editProfileTitle'>Edit profile</p>
                        </div>
                        <div className='editProfileSaveButtonOuter' onClick={()=>{changeUserData(name,bio,location,website,DOB,month,day,year,monthAndYearVisible,yearVisible);props.setEditProfile(false);ProfileTabApi(store)}}>
                            <div className='editProfileSaveButton'>
                                <p className='editProfileSaveButtonText'>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='editProfileHeaderImgOuter'>
                    <div className={headImg != ''   && headImg!='undefined' && headImg!=null ? 'editProfileHeaderImgDiv' : 'editProfileHeaderImgDiv editProfileHeaderImgDiv-1'}>
                        {headImg != ''  && headImg!='undefined' && headImg!=null ?
                            <img className='editProfileHeaderImg' src={headImg} />
                            :
                            <></>
                        }
                        <div className={headImg != ''  && headImg!='undefined' && headImg!=null  ? 'imageCoveringDiv' : 'imageCoveringDiv imageCoveringDiv-1'}></div>
                        <div className='headerImageEditOptionOuter'>
                            <div className='headerImageEditOption'>
                                <div className='headerImageAddIconDiv'>
                                    <img className='headerImageAddIcon' src={addProfile} />
                                    <input ref={headerImageInput} className='headerImageInput' type="file" onChange={(e) => { setHeadImg(URL.createObjectURL(e?.target?.files[0])); }} />
                                </div>
                                {headImg != ''  && headImg!='undefined' && headImg!=null ?
                                    <div className='headerImageRemoveIconDiv' onClick={() => { headerImageInput.current.value = ''; setHeadImg('') }}>
                                        <img className='headerImageRemoveIcon' src={removeProfile} />
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='editProfileUserImgOuter'>
                    <div className='editProfileUserImgDiv'>
                        <img className='editProfileUserImg' src="https://pbs.twimg.com/profile_images/1426558998354960385/hMwV9rp2_reasonably_small.jpg" />
                        <div className='profileImageCoveringDiv'></div>
                        <div className='headerImageEditOptionOuter'>
                            <div className='headerImageAddIconDiv'>
                                <img className='headerImageAddIcon' src={addProfile} />
                                <input ref={headerImageInput} className='headerImageInput' type="file" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='editProfileNameOuter'>
                    <div className='editProfileName'>
                        <GetInput value={'Name'} inputValue={true} js={0} invalid={"Name can’t be blank"} name={name} setname={setName} setUserData={setUserData}/>
                    </div>
                </div>
                <div className='editProfileBioOuter'>
                    <div className='editProfileBio'>
                        <VerifcationInput class={'otp_code'} bio={bio} setBio={setBio} count={bio.length} editProfileBio={true} inputName={'Bio'} maxCount={160} labelClass={'codeLabel codeLabel-1 codeLabel-2'} inputRef={codeInput} inputType={'text'} setButtonChange={setButtonChange} setButtonActive={setButtonActive} />
                    </div>
                </div>
                <div className='editProfileLocationOuter'>
                    <div className='editProfileLocation'>
                        <VerifcationInput class={'otp_code'} value={location} setValue={setLocation} count={bio.length} editProfileBio={true} inputName={'Location'} maxCount={30} locWeb={true} labelClass={'codeLabel codeLabel-1 codeLabel-2'} inputRef={codeInput} inputType={'text'} setButtonChange={setButtonChange} setButtonActive={setButtonActive} />
                    </div>
                </div>
                <div className='editProfileWebsiteOuter'>
                    <div className='editProfileWebsite'>
                        <VerifcationInput class={'otp_code'} value={website} setValue={setWebsite} count={bio.length} editProfileBio={true} inputName={'Website'} maxCount={100} locWeb={true} labelClass={'codeLabel codeLabel-1 codeLabel-2'} inputRef={codeInput} inputType={'text'} setButtonChange={setButtonChange} setButtonActive={setButtonActive} />
                    </div>
                </div>
                <div className='editProfileDOBEditDiv'>
                    <p className='editProfileDOBEdit'>Birth date · {confrimEditProfile == false ? <span className='editProfileDOBEditLink' onClick={() => { setDOBEditDialog(true) }}>Edit</span> : <span className='editProfileDOBEditLink' onClick={() => { setConfrimEditProfile(false);setMonth(null);setDay(null);setYear(null) }}>Cancel</span>}</p>
                </div>
                {confrimEditProfile == false ?
                    <div className='editProfileDOBDiv'>
                        {DOB != null  ?
                            <p className='editProfileDOB'>{DOB}</p>
                            :
                            <p className='editProfileDOB'>Add your date of birth</p>
                        }
                    </div>
                    :
                    <div className='changeDOBAreaOuter'>
                        <div className='changeDOBArea'>
                            <div className='changeDOBNoteDiv'>
                                <p className='changeDOBNote'>This should be the date of birth of the person using the account. Even if you’re making an account for your business, event, or cat.</p>
                            </div>
                            <div className='changeDOBPolicyDiv'>
                                <p className='changeDOBPolicy'>Twitter uses your age to customize your experience, including ads, as explained in our <span className='changeDOBPolicyLink'>Privacy Policy</span>.</p>
                            </div>
                            <div className='DOBChangeInputOuter'>
                                <div className='DOBChangeInput'>
                                    <Dob class={'Month'} arr={[' ', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} value={month} setvalue={setMonth} />
                                    <Dob class={'Day'} arr={[' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]} value={day} setvalue={setDay} />
                                    <Dob class={'Year'} arr={years} value={year} setvalue={setYear} />
                                </div>
                            </div>
                            <div className='DOBSeeingOptionOuter'>
                                <div className='DOBSeeingOption'>
                                    <div className='DOBSeeingOptionTitleDiv'>
                                        <p className='DOBSeeingOptionTitle'>Who sees this?</p>
                                    </div>
                                    <div className='DOBSeeingOptionNoteDiv'>
                                        <p className='DOBSeeingOptionNote'>You can control who sees your birthday on Twitter. <span className='DOBSeeingOptionNoteLink'>Learn more</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='monthandDayVisible'>
                                <Dob class={'MonthandDay'} arr={['Public','Your followers','People you follow','You follow each Other','Only you']} editProfile={true} defaultIndex={'You follow each Other'} value={monthAndYearVisible} setvalue={setMonthAndYearVisible} />
                            </div>
                            <div className='yearVisible'>
                                <Dob class={'Year'} arr={['Public','Your followers','People you follow','You follow each Other','Only you']} editProfile={true}  defaultIndex={'Only you'} value={yearVisible} setvalue={setYearVisible} />
                            </div>
                            <div className='RemoveDOBOuter' onClick={()=>{ApiCall('patchHeader','removeDOB','removedob');setConfrimEditProfile(false);setMonth(null);setDay(null);setYear(null);setDOB(null)}}>
                                <div className='RemoveDOB'>
                                    <p className='RemoveDOBText'>Remove birth date</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className='switchProfessionalOuter'>
                    <div className='switchProfessional'>
                        <p className='switchProfessionalText'>Switch to professional</p>
                        <div className='switchProfessionalGoArrow'>{downArrow('rgb(83, 100, 113)','17.5px','17.5px')}</div>
                    </div>
                </div>
                {DOBEditDialog == true ?
                    <Dialog open={true}>
                        <div className='editProfileConfrimDialogOuter'>
                            <div className='editProfileConfrimDialog'>
                                <div className='confrimHeadingDiv'>
                                    <p className='confrimHeading'>Edit date of birth?</p>
                                </div>
                                <div className='confrimNotesDiv'>
                                    <p className='confrimNotes'>This can only be changed a few times. Make sure you enter the age of the person using the account. </p>
                                </div>
                                <div className='confrimEditButtonOuter' onClick={() => { setConfrimEditProfile(true); setDOBEditDialog(false) }}>
                                    <div className='confrimEditButton'>
                                        <p className='confrimEditButtonText'>Edit</p>
                                    </div>
                                </div>
                                <div className='confrimCancelButtonOuter' onClick={() => { setDOBEditDialog(false) }}>
                                    <div className='confrimCancelButton'>
                                        <p className='confrimCancelButtonText'>Cancel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                    :
                    <></>
                }
            </div>
        </div>
    )
})