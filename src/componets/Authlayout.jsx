import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    //const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.posts.loading)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
        
            console.log("this is loading after true", authStatus)
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
      //  console.log("this is loading after false :: ", isLoading)
    }, [authStatus, navigate, authentication])
    

  return( isLoading ? <h1>Loading...</h1> : <>{children}</>)
}
























// import React, {useEffect} from "react";
// import {useDispatch, useSelector} from 'react-redux';
// import {refreshTokens} from '../store/features/auth/userThunk';

// const Authlayout = ({children})=>{
//    dispatch = useDispatch()
// useEffect(()=>{

//            const refresh = async () => {
//       try {        //.wrap()
//         await dispatch(refreshTokens());
//       } catch (err) {
//         console.error("Token refresh failed:", err);
//       }
//     };

//     refresh();


// },[dispatch])
          



//           return    ( loading ? <h1>loading......</h1> : <>{children}</>)
// }
