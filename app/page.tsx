"use client"
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const interval = setInterval(() => {
        // Reload the page
        window.location.reload();
    }, 600000); // Refresh every two minutes (120000 milliseconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
}, []);

  
  const components = [];
  for (let i = 0; i < 200; i++) {
    components.push(<iframe src='https://y2matee.online' width={250} height={150}/>);
    components.push(<iframe src='https://instadl.y2matee.online' width={250} height={150}/>);
  }

  return (
    <div className='w-full flex flex-wrap' key="key">
      {components}
    </div>
  )
}

export default Home
