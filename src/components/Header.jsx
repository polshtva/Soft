import imgLogo from "/vite.svg"
const now = new Date()

export default function Header(){
    return(
        <div className="header">
            <div className="logo">
            <img src={imgLogo} alt="" />
            <p className="header__title" >My first project React</p>
            </div>
            <span>Дата: {now.toLocaleDateString()}</span> 
            
        </div>
    )
}