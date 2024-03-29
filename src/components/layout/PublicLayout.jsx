import { Link } from "react-router-dom"

const PublicLayout = ({children}) => {
  return (
    <section className="min-h-screen font-urbanist bg-purple-bg text-white bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat sm:bg-[url(/images/bg-auth-desktop.png)] overflow-hidden">
        <header className="flex p-3 py-3 items-center justify-center bg-purple-dark sm:text-lg relative">
          <Link to="/">
           <h1 className="uppercase font-semibold">Gift Music</h1>
          </Link>
      </header>
      <section className="flex justify-center items-center pt-10 px-4">
        {children}
      </section>
    </section>
  )
}
export default PublicLayout