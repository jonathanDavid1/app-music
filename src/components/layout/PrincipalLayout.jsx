import { Link } from "react-router-dom";
import { LogoutIcon, MinimalPlayIcon, PlaylistIcon } from "../shared/icons";
import { useUserInfo } from "../../store/userInfo";
import { useState } from "react";
import PopUpPlaylist from "../playlist/PopUpPlaylist";


const PrincipalLayout = ({children}) => {
  const logout = useUserInfo(state => state.logout)
  const [isShowAuthOptions, setIsShowAuthOptions] = useState(false)
  const [isShowCurrentPlaylist, setIsShowCurrentPlaylist] = useState(false)
  return (
    <section className="min-h-screen font-urbanist bg-purple-bg text-white bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat sm:bg-[url(/images/bg-auth-desktop.png)] overflow-hidden">
        <header className="flex p-2 justify-between items-center bg-purple-dark sm:text-lg relative">
          <h1 className="uppercase font-semibold">Gift Music</h1>

          <section className="flex gap-4 [&>button]:uppercase [&>button]:border-[1px]  [&>button]:py-1 [&>button]:px-2 [&>button]:text-sm  [&>button]:rounded-full  [&>button]:font-semibold  [&>button]:border-yellow-border ">
            <button onClick={() => setIsShowAuthOptions(!isShowAuthOptions)} className="hover:bg-bg-purple-light  ">Mi cuenta</button>
            <button onClick={()=> setIsShowCurrentPlaylist(!isShowCurrentPlaylist)} className="flex gap-3 sm:gap-2 items-center hover:bg-bg-purple-light">
              <PlaylistIcon/>
              <span className="hidden sm:inline">Grabando </span>1
              </button>
          </section>
        {/* Popup Auth */}
        <article className={`absolute -bottom-4 translate-y-full grid bg-bg-purple-light p-4 gap-2 rounded-lg border border-yellow-border transition-[right] ${isShowAuthOptions ? "right-4" : "-right-full"}`}>
          <Link to={"playlists"} className="flex gap-2 items-center uppercase font-semibold hover:text-yellow-border group">
            <MinimalPlayIcon />
            Mis grabaciones</Link>
          <button onClick={logout} className="flex gap-2 items-center uppercase font-semibold hover:text-yellow-border group">
            <LogoutIcon /> Cerrar sesion</button>
        </article>

        {/* PopUP Playlist */}
       <PopUpPlaylist isShowCurrentPlaylist={isShowCurrentPlaylist} />
      </header>
      <section className="flex justify-center items-center pt-10 px-4">
        {children}
      </section>
    </section>
  );
}

export default PrincipalLayout;
