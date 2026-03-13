import React ,{useContext}from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,input,setInput}=useContext(Context);
  return (
      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult?<><div className="greet">

                <p><span>Hello, People...</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Helping you figure out the right direction—gently and clearly</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Helping you find the right direction, one step at a time</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Message me whenever you need clarity or answers</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Write, fix, and explore code—I'll help you every step</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div></>:<div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                {/*<div className='result-text'>
                    <p>{resultData}</p>
                </div>*/}
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
                </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent(input)} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini AI helps you think, create, and get things done—smarter and faster
                </p>
            </div>
        </div>
      </div>
   
  )
}

export default Main
