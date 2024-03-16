import google from "/google.svg";

const GoogleLogin = () => {
  return (
    <button className="bg-[#1F1F22] p-2 rounded-lg flex gap-2 justify-center items-center cursor-pointer w-full text-lg lg:text-xl font-medium">
    <img src={google} alt="google" className="w-6 lg:w-7" />
    <p>Continue with google</p>
  </button>
  )
}

export default GoogleLogin