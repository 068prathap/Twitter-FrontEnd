import './EditProfile.css';
import { closeIcon } from '../../utils/icongenerator';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import addProfile from '../../icons/addProfile.svg'
import removeProfile from '../../icons/removeProfile.svg'
import { useRef, useState } from 'react';
import GetInput from '../getInput/GetInput';
import VerifcationInput from '../verificationInput/VerificationInput';

export default observer( function EditProfile()
{
    const [headImg,setHeadImg]=useState(store.profileHeaderImg);
    const [Img,setImg]=useState(store.profileImg);
    const [name,setName]=useState(store.profileName);
    const headerImageInput=useRef();
    const codeInput=useRef();
    const[buttonChange,setButtonChange]=useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const [bio,SetBio]=useState(store.profileBio);
    const [Location,setLocation]=useState(store.profileLocation)
    const [Website,setWebsite]=useState(store.profilewebsite)
    console.log(headImg);

    return(
        <div className='editProfileOuter'>
            <div className='editProfile'>
                <div className='editProfileHeaderOuter'>
                    <div className='editProfileHeader'>
                        <div className='editProfileCloseIcon'>{closeIcon('rgb(15, 20, 25)','19px','19px')}</div>
                        <div className='editProfileTitleDiv'>
                            <p className='editProfileTitle'>Edit profile</p>
                        </div>
                        <div className='editProfileSaveButtonOuter'>
                            <div className='editProfileSaveButton'>
                                <p className='editProfileSaveButtonText'>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='editProfileHeaderImgOuter'>
                    <div className={headImg!='' ? 'editProfileHeaderImgDiv' : 'editProfileHeaderImgDiv editProfileHeaderImgDiv-1'}>
                        {headImg!='' ?
                            <img className='editProfileHeaderImg' src={headImg}/>
                            :
                            <></>
                        }
                        <div className={headImg!='' ? 'imageCoveringDiv' : 'imageCoveringDiv imageCoveringDiv-1'}></div>
                        <div className='headerImageEditOptionOuter'>
                            <div className='headerImageEditOption'>
                                <div className='headerImageAddIconDiv'>
                                    <img className='headerImageAddIcon' src={addProfile}/>
                                    <input ref={headerImageInput} className='headerImageInput' type="file" onChange={(e)=>{setHeadImg(URL.createObjectURL(headerImageInput.current.files[0]));}}/>
                                </div>
                                {headImg!='' ? 
                                    <div className='headerImageRemoveIconDiv' onClick={()=>{headerImageInput.current.value='';setHeadImg('')}}>
                                        <img className='headerImageRemoveIcon' src={removeProfile}/>
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
                        <img className='editProfileUserImg' src="https://pbs.twimg.com/profile_images/1426558998354960385/hMwV9rp2_reasonably_small.jpg"/>
                        <div className='profileImageCoveringDiv'></div>
                        <div className='headerImageEditOptionOuter'>
                            <div className='headerImageAddIconDiv'>
                                <img className='headerImageAddIcon' src={addProfile}/>
                                <input ref={headerImageInput} className='headerImageInput' type="file"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='editProfileNameOuter'>
                    <div className='editProfileName'>
                        <GetInput value={'Name'} inputValue={true} js={0} invalid={"Name can’t be blank"} name={name} setname={setName}/>
                    </div>
                </div>
                <div className='editProfileBioOuter'>
                    <div className='editProfileBio'>
                        <VerifcationInput class={'otp_code'} bio={bio} SetBio={SetBio} count={bio.length} editProfileBio={true} inputName={'Bio'} maxCount={160} labelClass={'codeLabel codeLabel-1 codeLabel-2'} inputRef={codeInput} inputType={'text'} setButtonChange={setButtonChange} setButtonActive={setButtonActive}/>
                    </div>
                </div>
                <div className='editProfileLocationOuter'>
                    <div className='editProfileLocation'>
                        <VerifcationInput class={'otp_code'} bio={bio} SetBio={SetBio} count={bio.length} editProfileBio={true} inputName={'Location'} maxCount={30} locWeb={true} labelClass={'codeLabel codeLabel-1 codeLabel-2'} inputRef={codeInput} inputType={'text'} setButtonChange={setButtonChange} setButtonActive={setButtonActive}/>
                    </div>
                </div>
                <div className='editProfileWebsiteOuter'>
                    <div className='editProfileWebsite'>
                        <VerifcationInput class={'otp_code'} bio={bio} SetBio={SetBio} count={bio.length} editProfileBio={true} inputName={'Website'} maxCount={100} locWeb={true} labelClass={'codeLabel codeLabel-1 codeLabel-2'} inputRef={codeInput} inputType={'text'} setButtonChange={setButtonChange} setButtonActive={setButtonActive}/>
                    </div>
                </div>
                <div className='editProfileDOBDiv'>
                    <p className='editProfileDOB'>Birth date · Edit</p>
                </div>
            </div>
        </div>
    )
})