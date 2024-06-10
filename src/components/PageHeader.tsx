import Logo from "../assets/Logo.jpg";

const PageHeader = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <img className="w-full h-full object-cover" src={Logo.src} alt="Logo"></img>
    </div>
  );
};

export default PageHeader;
