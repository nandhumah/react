import React ,{ useState} from 'react';


function Home() {
  const[isToggled,setToggled]=useState(false)
      const handletoggle=()=>{
        setToggled(!isToggled);
      }
  return (
    <div>
      <button onClick={handletoggle}>Toggle</button>
      {isToggled && <p>toggled is open</p>}
      </div>
  )
}

export default Home