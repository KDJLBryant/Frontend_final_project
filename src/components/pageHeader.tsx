import Logo from "../assets/Logo.jpg"

const PageHeader = () => {
  return (
    <div>
      <img className="logo" src={Logo.src} alt="Logo"></img>
    </div>
  )
}

export default PageHeader
