import './Form_Component.css'
import {useState, useEffect} from "react"

const FormComponent = () => {
    //******************useState ***************************/
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    
    const [errorUserName, setErrorUserName] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

    const [userNameColor, setUserNameColor] = useState("none")
    const [emailColor, setEmailColor] = useState("none")
    const [passwordColor, setPasswordColor] = useState("none")
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("none")

    const [checkUserInput, setCheckUserInput] = useState(false)

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            return (true)
        }
        return (false)
    }
    

    


    useEffect(() => { 
        
        //*********************userName******************* */
        
        if(userName ==="") {
            setUserNameColor("empty-space")
        }else if (userName.length >= 8) {
            setErrorUserName("")
            setUserNameColor("correct")
        }else{
            setErrorUserName("Least 8 letter!")
            setUserNameColor("incorrect")
        }
        //*********************email******************* */
        if(email ==="") {
            setEmailColor("empty-space")
        }else if (ValidateEmail(email)) {
            setErrorEmail("")
            setEmailColor("correct")
        }else{
            setErrorEmail("Invalid format! Please enter again")
            setEmailColor("incorrect")
        }
        //*********************password******************* */
        if(password ==="") {
            setPasswordColor("empty-space")
        }else if (password.length >= 8) {
            setErrorPassword("")
            setPasswordColor("correct")
        }else{
            setErrorPassword("Least 8 letter!")
            setPasswordColor("incorrect")
        }
        //*********************confirmPassword******************* */
        if(confirmPassword ==="") {
            setConfirmPasswordColor("empty-space")
        }else if (confirmPassword.length < 8) {
            setErrorConfirmPassword("Least 8 letter!")
            setConfirmPasswordColor("incorrect")
        }else if (confirmPassword !== password) {
            setErrorConfirmPassword("Password do not match")
            setConfirmPasswordColor("incorrect")
        }else{
            setErrorConfirmPassword("")
            setConfirmPasswordColor("correct")
        }
        //******************checkUserInput *****************************/
        if (
            userNameColor === "correct" &&
            emailColor === "correct" &&
            passwordColor === "correct" &&
            confirmPasswordColor === "correct"
        ){
            setCheckUserInput(true)
        }else{
            setCheckUserInput(false)
        }

        }, [userName, email, password, confirmPassword, errorUserName, errorEmail, 
            errorPassword, errorConfirmPassword, checkUserInput]
    )


    return (
        <div className = "container" >
            <h1>CREATE ACCOUNT</h1>

            <form className = "register-form">
                <div className = "form-control">
                    <label>USERNAME</label>
                    <input className = {userNameColor} type="text" placeholder="least 8 letter" value={userName} 
                        onChange={(event)=>setUserName(event.target.value)}
                    />
                    <small>{errorUserName}</small>   
                </div>

                <div className = "form-control">
                    <label>EMAIL</label>
                    <input className = {emailColor} type="text" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    <small>{errorEmail}</small>   
                </div>

                <div className = "form-control">
                    <label>PASSWORD</label>
                    <input className = {passwordColor} type="password" placeholder="least 8 letter" value={password} 
                        onChange={(event)=>setPassword(event.target.value)}
                    />
                    <small>{errorPassword}</small>   
                </div>

                <div className = "form-control">
                    <label>CONFIRM PASSWORD</label>
                    <input className = {confirmPasswordColor} type="password" value={confirmPassword} 
                        onChange={(event)=>setconfirmPassword(event.target.value)}
                    />
                    <small>{errorConfirmPassword}</small>   
                </div>

                <button type = "submit" disabled= {!checkUserInput}>SIGN UP</button>

                
            </form>
        </div>

    );
}

export default FormComponent;