export function change_verify(verify,setinput_verify,setverify,setnumber_id,setinvalid_message)
{
    setinput_verify(verify);
    let a = verify == 'Phone' ? 'Email' : 'Phone';
    setverify(a)
    setnumber_id('');
    if (a == 'Email') {
        setinvalid_message('Please enter a valid phone number.');
    }
    else if (a == 'Phone') {
        setinvalid_message('Please enter a valid email.');
    }
}

export function navigationForward(signupStep2,signupStep1)
{
    signupStep2.current.style.display='block';
    signupStep1.current.style.display='none';
}