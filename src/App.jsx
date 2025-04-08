
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/navbar/Navbar'

function App() {
  const [bookmark, setBookmark] = useState([])
  const handleBookmark = (blog) => {
      setBookmark([...bookmark,setBookmark])


  }
  console.log(bookmark);
  return (
    <>
      <div>
        
        <Navbar></Navbar>
        
        <div className="main-container flex justify-center text-center">
          <div className="left-container w-[70%]">
            <Blogs  handleBookmark={handleBookmark}>
             
</Blogs>
          </div>
          
          <div className="right-container w-[30%]"><h1>reading time</h1>
            <h1>bookmark count:0</h1>
            {
              bookmark.map((marked)=><p>{marked.title}</p>)
            }
          </div> 
        </div>
     </div>
      
    </>
  )
}

export default App
