import React from 'react'
import ContainerAuth from '../components/layout/ContainerAuth'
import { Link, useNavigate } from 'react-router-dom'
import { axiosMusic } from '../config/axios.config'
import { useUserInfo } from '../store/userInfo'

const Login = () => {
  const login = useUserInfo(state => state.login)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    axiosMusic
    .post("/api/auth/login", data)
    .then(({data}) => {
      login(data)
      navigate("/")
    }
      )
    .catch((err) => console.log(err))
  }
  return (
       <ContainerAuth>
         <header className='hidden sm:block sm:max-w-[350px] '>
        <img src="/images/login-header.png" alt="" />
      </header>
      <form onSubmit={handleSubmit} className='grid gap-6 w-[min(100%,_350px)] sm:w-[300px]'>
        <h2 className='uppercase font-semibold text-4xl'>Iniciar sesión</h2>
        <div className='grid gap-4'>
          <label className='text-white/50' htmlFor="email">Correo</label>
          <input className='bg-transparent outline-none border-b border-yellow-border p-1' 
          type="email"
          id='email'
          name='email'
          />
        </div>
        <div className='grid gap-4'>
          <label className='text-white/50' htmlFor="password">Contraseña</label>
          <input className='bg-transparent outline-none border-b border-yellow-border p-1' 
          id="password" 
          type="password"
          name='password'
          />
        </div>

        <button className='bg-bg-purple-light uppercase font-semibold max-w-max mx-auto px-6 py-1 rounded-full text-sm'>Entrar</button>
        
        <Link className='text-center  underline' to="/auth/register">O crear una cuenta nueva</Link>
      </form>
       </ContainerAuth>
  )
}

export default Login
