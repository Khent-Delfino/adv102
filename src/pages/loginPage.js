import { useEffect, useState } from "react"


const LoginPage = () => {
  const [email, setEmail] = useState('email')
  const [password, setPassword] = useState('test')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  //useEffect(function, dependencies)
  useEffect(() => {
    if(!email.endsWith('@gmail.com')){
      setErrorEmail('email is not a valid email')
    }
    else{
      setErrorEmail('')
    }
  },[email])

  useEffect(() => {
    if(password.length <= 8 || password.length >= 20){
      setErrorPassword('Password must be between 8 and 20 characters')
    }
    else{
      setErrorPassword('')
    }
  },[password])
  

  return (
    <div class='p-5 bg-slate-50 flex-row justify-center items-center '>
      <p class='text-2xl'>Login</p>
      <div class='h-[50vh] w-[400px] bg-gray-500 p-4 rounded mb-2'>
        <div class='flex-col'>
          <p class='text-white'>Email</p>
          <input 
            class='w-full'
            type='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p class='text-red-400'>{errorEmail}</p>
        </div>
        <div class='flex-col'>
          <p class='text-white'>Password</p>
          <input 
            class='w-full'
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p class='text-red-400'>{errorPassword}</p>
        </div>
        
        <button class='bg-white text-black px-10 py-2 rounded-full w-full mt-3'>Login</button>
      </div>
    </div>
  )
}

export default LoginPage