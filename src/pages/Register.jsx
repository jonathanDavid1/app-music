import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className='font-urbanist min-h-screen bg-purple-bg text-white grid justify-stretch justify-items-center items-center bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat p-4 gap-12 sm:grid-cols-[auto_auto] sm:justify-center sm:bg-[url(/images/bg-auth-desktop.png)]'>
      <header className='hidden sm:block sm:max-w-[350px]'>
        <img src="/images/register-header.png" alt="" />
      </header>
      <form className='grid gap-6 w-[min(100%,_350px)] sm:w-[300px]'>
        <h2 className='uppercase font-semibold text-4xl'>Cuenta nueva</h2>
        <div className='grid gap-4'>
          <label className='text-white/50' htmlFor="">Correo</label>
          <input className='bg-transparent outline-none border-b border-yellow-border p-1' type="email" />
        </div>
        <div className='grid gap-4'>
          <label className='text-white/50' htmlFor="">Nombre de usuario</label>
          <input className='bg-transparent outline-none border-b border-yellow-border p-1' type="text" />
        </div>
        <div className='grid gap-4'>
          <label className='text-white/50' htmlFor="password">Contraseña</label>
          <input className='bg-transparent outline-none border-b border-yellow-border p-1' id="password" type="password" />
        </div>

        <button className='bg-bg-purple-light uppercase font-semibold max-w-max mx-auto px-6 py-1 rounded-full text-sm'>Crear</button>
        
        <Link className='text-center  underline' to="/auth/login">O iniciar sesión</Link>
      </form>
    </main>
  )
}

export default Register
