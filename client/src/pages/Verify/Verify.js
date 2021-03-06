import React, { Fragment, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import Header from '../../components/Header/Header';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

function Verify({title,clientRootUrl,apiRootUrl,match,loggedInStatus, verifyAuth, token}) {
    
    const {email,v_token} = match.params;

    const [invalidParamError, setInvalidParamError] = useState(false);
    const [checking, setChecking] = useState(true);
    const [redr, setRedr] = useState(false);

    useEffect(()=>{
        axios.post(`${apiRootUrl}user/verify/${email}/${v_token}`)
        .then(({data})=>{
            console.log(data);
            setChecking(false);
            if(data.error === 0) {
                // store new token
                localStorage.setItem('wpt', data.token);

                // redirect to homepage
                // setRedr(true);
                window.location = "/";
            } else {
                    toast.error(data.error, {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })    
            }
            
        })
        .catch(err=>{
            // remove loader
            setChecking(false);

            console.log(err)
            
            // show bad image

            // show notification
            
        })

        return () => {
            
        }   
    }, [apiRootUrl]);

    return (
       <React.Fragment>
           {verifyAuth()}
            { redr && <Redirect to = "/" /> }
            { checking && <Loader /> }
            { invalidParamError && <Redirect to = "/" /> }
            <Header title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} token = {token} />
            <div style = {{height:'50px'}}></div>
            <div className = "container center-div">
                    {/* <h1>404</h1> */}
                    <img src  = {`${clientRootUrl}images/7-2-sad-crying-emoji-png.png`} width = "180px" alt = "" />
                    <h4>Hey! Nice to meet you again.</h4>
                    <p>Please hold on while your account is verified...</p>
            </div>
            <div style = {{height:'280px'}}></div>
       </React.Fragment>
    )
}

export default Verify;