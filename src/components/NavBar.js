import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className=" flex justify-between py-12">
            <img className="h-[3%] w-[3%] ml-32 rounded-lg" src="https://w7.pngwing.com/pngs/64/431/png-transparent-amphibian-smiley-logo-happiness-font-square-shape-s-text-vertebrate-grass-thumbnail.png"/>
        <div className=" flex w-[50%] justify-evenly ml-[4%] text-sm">
            <h4>Emotions</h4>
            <h4>Manifesto</h4>
            <h4>Self-awareness test</h4> 
            <h4>Work With Us</h4>
       </div>
        <div className="rounded-3xl  p-3 bg-black text-white text-center text-xs mr-[20%] h-10 w-18">
             <button>Download app</button>
        </div> 
        </div> 
    </div>
  )
}

export default NavBar