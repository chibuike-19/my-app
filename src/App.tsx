import React, {useEffect, useState} from 'react';
import './App.css';
import PageLoading from './component/PageLoading';
import Router from './router/Router';
import { useSelector } from 'react-redux';
import { IRootState } from '.';

function App() {
  const [userLoading, setUserLoading] = useState(true)
  const [adminLoading, setAdminLoading] = useState(true)
  
  const user = useSelector((state: IRootState)=> state.user.value)
  const admin = useSelector((state: IRootState) => state.admin.value)

  const { userLoggedIn } = user
  const { adminLoggedIn } = admin

  const UserAccessToken = localStorage.getItem('userAccessToken') || sessionStorage.getItem('userAccessToken') || ''
  const AdminAccessToken = localStorage.getItem('adminAccessToken') || sessionStorage.getItem('adminAccessToken') || ''
  
  useEffect(() => {
    if(UserAccessToken && !userLoggedIn){
      //write Api function to get userProfile 
    }else{
      setUserLoading(false)
    }
  }, [])

  useEffect(() => {
    if(AdminAccessToken && !adminLoggedIn){
      //write Api function to get adminProfile 
    }else{
      setAdminLoading(false)
    }
  }, [])

  return (
    <div className="App">
      {userLoading || adminLoading ? <PageLoading/> : <Router/>}
    </div>
  );
}

export default App;
