import {useState,useEffect } from 'react'
import './index.css'
let data =[]
const style_block={
                    display: "block",
                    height: "30px",
                    border: "none",
                    margin: "20px",
                    backgroundColor:"transparent",
                    color:"rgb(255 142 0)",
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
            check: false
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
            data=state
            {console.log(data)}
        }  
        return (
            <div className='createAccount'>
                <form onSubmit={handleSubmit}>
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
                        <label id='check' style={{color:"rgb(255 252 0"}} >  Are you agree with our policy</label>
                        </div>
                    <button className="form--submit">Sign up</button>
                </form>
            </div>
            )
    }
    /*//////////////////////////createAccount*/
    /* HadAccount/////////////////////////////// */
    function HadAccount({name}) {
        const [formData, setFormData] = useState({
            email: "",
            password: ""
        })
        function handleChange(event) {
            const {name, value, type, checked} = event.target
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }))
        }
        function handleSubmit(event) {
            event.preventDefault()
            console.log(formData)
        }
        return (
            <div className='hadAccount'>
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
                </form>
            </div>
            )
    }
    /*///////////////////////////HadAccount */
function App() {
    const [account,setAccount] = useState({creat:false,had:false});
    return(
    <>
    {account.creat === true?<CreatAccount />:null}
    {account.had === true?<HadAccount name={data.firstName}/>:null}
    <button className='btn1' onClick={()=>{setAccount((prevAccount)=>({...prevAccount,creat:true,had:false}))}}>Creat Account</button>
    <button className='btn2' onClick={()=>{setAccount((prevAccount)=>({...prevAccount,had:true,creat:false}))}}>Have Account</button>
    </>
  )
}
export default App
