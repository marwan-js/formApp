import {useState} from 'react'
import './index.css'
let data ={
    firstName:'',
    email: "",
    password: "",
}
const style_block={
                    display: "block",
                    height: "30px",
                    border: "none",
                    margin: "20px",
                    backgroundColor:"transparent",
                    color:"rgba(176,174,28,1)",
                    fontSize:"20px"
                }
    /* creatAccount///////////////////////////// */
    function CreatAccount() {
        const [state,setState]= useState({
            firstName:'',
            lastName:'',
            email: "",
            password: "",
            passwordConfirm: "",
            check: false,
            value:false
    })
    const {firstName,lastName,email,password,passwordConfirm,check} = state;
        function handleChange(event) {
            const {name, value, type, checked} = event.target
            setState(prev => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }))
        }
        function handleSubmit(event) {
            event.preventDefault();
            if(password != passwordConfirm){
                window.alert('please Match the password with passwordConfirm')
            }else if(check === false){
                window.alert("sorry you have to agree with our policy")
            }else if(firstName === ""){
                window.alert('please enter the first name')
            }else if(lastName === ""){
                window.alert('please enter the last name')
            }else if(email === ""){
                window.alert('please enter the email')
            }else if(password.length > 10 ){
                window.alert('please make the password stronger')
            }
            else{
                data=state
                setState(prev => ({
                    ...prev,value:true}))
            }            
        }  
        return (
            <div className='createAccount'>
                {state.value?<p 
                style={{
                    position:"relative",
                    top:"50%",
                    right:"50%",
                    transform:"translate(50%,50%)",
                    color:"rgb(193 255 2)",
                    fontSize:"40px"}} >your data has been saved
                    </p>
                    :<form onSubmit={handleSubmit}>
                <input 
                        type="text" 
                        placeholder="First name"
                        name="firstName"
                        onChange={handleChange}
                        value={firstName}
                        style={style_block}
                    />
                    <input 
                        type="text" 
                        placeholder="Last name"
                        name="lastName"
                        onChange={handleChange}
                        value={lastName}
                        style={style_block}
                    />
                    <input 
                        type="email" 
                        placeholder="Email address"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        style={style_block}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        style={style_block}
                    />
                    {password ? password.length < 10 ?<p style={{color:"red",fontSize:"16px"}}>make the password stronger</p>:null :null }
                    {/* password.length < 10 ?<p style={{color:"red",fontSize:"16px"}}>make the password stronger</p>:null */}
                    <input 
                        type="password" 
                        placeholder="Confirm password"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={passwordConfirm}
                        style={style_block}
                    />
                    <div style={style_block}>                       
                        <input
                            id="check"
                            type="checkbox"
                            name="check"
                            onChange={handleChange}
                            checked={check}
                        />
                        <label id='check' style={{color:"rgba(176,174,28,1)"}} >  Are you agree with our policy</label>
                        </div>
                    <button className="form--submit">Sign up</button>
                </form>}        
            </div>
            )
    }
    /*//////////////////////////createAccount*/
    /* HadAccount/////////////////////////////// */
    function HadAccount({firstName,email,password}) {
        const [formData, setFormData] = useState({
            email: "",
            password: "",
            check : false
        })
        function handleChange(event) {
            const {name, value} = event.target
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }))
        }
        function handleSubmit(event) {
            event.preventDefault()
            if(email != formData.email){
                window.alert('wrong email')
            }else if(password != formData.password){
                window.alert('wrong password')
            }else{
                console.log('marwan')
                setFormData(prevFormData => ({
                    ...prevFormData,check:true}))
            }

        }
        return (
            <div className='hadAccount'>
                {formData.check?
                <p style={{
                    position:"relative",
                    top:"50%",
                    right:"50%",
                    transform:"translate(50%,50%)",
                    color:"rgb(193 255 2)",
                    fontSize:"60px"}}>wlcome: {firstName}
                    </p>:
                <form onSubmit={handleSubmit}>                
                    <input 
                            type="email" 
                            placeholder="Email address"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            style={style_block}
                        />
                    <input 
                            type="password" 
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            style={style_block}
                        />
                        <button>sigh in</button>
                </form>}
            </div>
            )
    }
    /*///////////////////////////HadAccount */
function App() {
    const [account,setAccount] = useState({creat:false,had:false});
    let btn
    function style_btn(){
        if(account.creat||account.had){
            btn={}
        }else{
            btn={top:"50%"}
        }
    }
    style_btn()
    return(
    <>
    {account.creat === true?<CreatAccount />:null}
    {account.had === true?<HadAccount firstName={data.firstName}email={data.email} password={data.password}/>:null}
    <button className='btn1' style={btn} onClick={()=>{setAccount((prevAccount)=>({...prevAccount,creat:true,had:false}))}}>Creat Account</button>
    <button className='btn2' style={btn} onClick={()=>{setAccount((prevAccount)=>({...prevAccount,had:true,creat:false}))}}>Have Account</button>
    </>
  )
}
export default App
