const Navbar:React.FC=()=>{
return(
          <nav className="bg-gray-800  h-20 w-full flex align-middle justify-between text-white">
                    <div className="text-3xl p-4">
                              Logo
                    </div>
                    <div className="flex   gap-5 texl-2xl p-4">
                              <a href="#">Home</a>
                              <a href="#">About</a>
                              <a href="#">Contact Us</a>
                    </div>
          </nav>
)
};
export default Navbar;