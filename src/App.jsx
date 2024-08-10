import FormOne from "./components/FormOne"
import Navbar from "./components/Navbar"
import Resume from "./components/Resume"
import Form from "./components/Form"
import './Resume.css'
import './Form.css'
import { useState } from "react"


function App() {
  // const [profile, setProfile] = useState(null)
  const [coverImage, setCoverImage] = useState('https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg')
  // const [visibility, setVisibility] = useState(true)
  const visibility = true;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [educationData, setEducationData] = useState({
    startYear: '',
    endYear: '',
    school: '',
    city: '',
    description: '',
  })

  const [experienceData, setExperienceData] = useState({
    startYear: '',
    endYear: '',
    company: '',
    city: '',
    description: '',
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]//Target the first file from the files array passed by the input
    console.log(file);

    if (file) {
      const imageURL = URL.createObjectURL(file);//
      setCoverImage(imageURL); // Update the state with the image URL
    }
  }

  const handleTextChange = (e) => {
    const change = e.target.id;
    const value = e.target.value
    console.log(value);

    if (e.target.getAttribute('data-type') == 'general') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [change]: value
      }))
    }

    if (e.target.getAttribute('data-type') == 'experience') {
      setExperienceData((prevExpData) => ({
        ...prevExpData,
        [change]: value
      }))
    }

    if (e.target.getAttribute('data-type') === 'education') {
      setEducationData((prevEduData) => ({
        ...prevEduData,
        [change]: value, // Correctly update the specific field in educationData
      }));
    }
  }

  


  return (
    <div className="">
      <Navbar />
      <div className='flex justify-center h-[100vh] mt-[2%]'>
        <FormOne coverImage={coverImage} handleTextChange={handleTextChange} formData={formData} visibility={visibility} handleImageChange={handleImageChange} />
        <Resume coverImage={coverImage} formData={formData} handleTextChange={handleTextChange} visibility={visibility} />
        {/* <Form data={educationData} handleTextChange={handleTextChange} dataType={'education'}/> */}
        <Form data={experienceData} handleTextChange={handleTextChange} dataType={'experience'} />
      </div>
    </div>
  )
}

export default App
