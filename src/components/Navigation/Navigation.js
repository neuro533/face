import React from 'react'

function Navigation({onSignOut,isSignedIn,onRouteChange}) {
  if(isSignedIn){
    return (
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
        
  
       <p onClick={()=>onSignOut("SignOut")} className='f3 link dim black underline pa3 pointer'>Sign Out</p> 
  
  
      </nav>
    )
  }else{
    return (
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
        
  
       <p onClick={()=>onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'>SignIn</p> 
       <p onClick={()=>onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
  
      </nav>
    )
  }
  
}

export default Navigation