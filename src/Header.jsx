import './index.css'
import msaImage from './assets/msa.png';
import Carrosel from './Carrosel';
import Bottom from './Bottom';
function Header() {
 

    return (
        <>
        <header className=''>

  {/* Navbar section start */}
  <nav className="container mx-auto mb-5  ">

    <div className="navbar  shadow-customInset rounded-full m-0 flex justify-between px-14 py-6">
    <div className="flex items-center">
    <img src={msaImage} className='w-[20%] h-24 rounded-[50%]'/>
          <div>
          <h1 className="ml-4 text-black text-xl font-bold">Muslim Students Association</h1>
          <small className="ml-4 text-black font-bold">Begum Rokeya University</small>
          </div>
        </div>
      <div className="navbar-center text-black hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a href="#">Home</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Event Registration</a></li>
            <li><a href="#">Event Verify</a></li>
            <li><a href="https://saimun1232.github.io/self-bank/index1.html">Log in</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Register</a></li>
        </ul>
      </div>
      <div>
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="black">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
            <li><a href="#">Home</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Event Registration</a></li>
            <li><a href="#">Event Verify</a></li>
            <li><a href="https://saimun1232.github.io/self-bank/index1.html">Log in</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Register</a></li>
          </ul>
        </div>
        
      </div>
      <div>
        <div className="relative">
          <i className="fa-solid absolute left-[120px] lg:left-[180px] top-[35%] fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search here"
            className=" placeholder:text-black bg-[#F85559] lg:placeholder:text-black p-3 lg:py-3 lg:px-5 rounded-full w-[150px] lg:w-auto"
          />
        </div>
      </div>
    </div>
  </nav>
  {/* Navbar section end */}
</header>

        </>
      
    )
  }
  export default Header;