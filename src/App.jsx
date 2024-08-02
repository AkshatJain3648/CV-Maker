import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Resume from "./components/Resume"
import './Resume.css'
import './Form.css'
import { useState } from "react"


function App() {
  // const [profile, setProfile] = useState(null)
  const [coverImage, setCoverImage] = useState('https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg')

  const handleImageChange = (e) => {
    const file = e.target.files[0]//Target the first file from the files array passed by the input
    console.log(file);

    if (file) {
      const imageURL = URL.createObjectURL(file);//
      setCoverImage(imageURL); // Update the state with the image URL
    }
  }


  return (
    <div className="">
      <Navbar />
      <div className='flex justify-center h-[100vh] mt-[2%]'>
        <Form coverImage={coverImage} handleImageChange={handleImageChange}/>
        <Resume coverImage={coverImage} />
      </div>
    </div>
  )
}

export default App
