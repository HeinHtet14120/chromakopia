import { useNavigate } from 'react-router-dom'
import logo from './assets/cotainer.png'
const Home = () => {
    const navigate = useNavigate()
  const handleHome = () => {
    navigate('/page')
  }
  return (
    <>
    <div className=" h-auto w-full bg-[#f6f6f6]">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className=" sm:w-[400px] md:w-[500px] lg:w-[600px] mt-10" />
        <h1 onClick={handleHome} className=" font-fira text-3xl mt-10 text-center text-green-800 font-bold cursor-pointer">OPEN</h1>
      </div>
      <hr className="w-full border-green-800 border-1 mt-20" />
      <div className="flex flex-col items-center justify-center">
        <p className=" font-fira text-[12px] my-5 text-center text-green-800 font-bold">@2024 Web3 to Concernt</p>
      </div>
    </div>
    </>
  )
}

export default Home