const Form = (props) => {
  const keyNames = Object.keys(props.data)

  return (
    <div className='form-container flex w-[100%]'>
      <form action="">
        <div className="input-container ic2">
          <input id="startYear" className="input" type="date" placeholder=''  onChange={props.handleTextChange} value={props.data.startYear} data-type={props.dataType}/>
          {/* <label htmlFor="email" className="placeholder" >Start Date</label> */}
        </div>

        <div className="input-container ic1">
          <input id="fullName" className="input" type="date" onChange={props.handleTextChange} value={props.data.endYear} data-type={props.dataType}/>
          {/* <label htmlFor="fullname">Till Date </label> */}
        </div>

        <div className="input-container ic1">
          <input id="school" className="input" type="text" placeholder={keyNames[2].charAt(0).toUpperCase() + keyNames[2].slice(1)} onChange={props.handleTextChange} value={props.data.school} data-type={props.dataType}/>
          {/* <label htmlFor="school">School</label> */}
        </div>

        <div className="input-container ic1">
          <input id="city" className="input" type="text" placeholder={keyNames[3].charAt(0).toUpperCase() + keyNames[3].slice(1)} onChange={props.handleTextChange} value={props.data.city} data-type={props.dataType}/>
          {/* <label htmlFor="school">School</label> */}
        </div>

        <div className="input-container ic1">
          <input id="description" className="input" type="text"  placeholder="Description" onChange={props.handleTextChange} value={props.data.description} data-type={props.dataType}/>
          {/* <label htmlFor="city">City</label> */}
        </div>

        <button type="submit" className="add-btn" id='add-btn' data-type={props.dataType}> + </button>
        <button type="submit" className="submit" data-type={props.dataType}>Next</button>

      </form>
    </div>
  )
}

export default Form
