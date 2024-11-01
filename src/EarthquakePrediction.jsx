import axios from 'axios'
import React, { useState } from 'react'

const EarthquakePrediction = () => {
    const [data, setData] = useState(null)
    const [formValues, setFormValues] = useState({
        latitude: "",
        longitude: "",
        Timestamp: "",
        depth: ""
    })

    // Update form values on user input
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    console.log(data)
     // Handle form submission
     const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/predict', formValues)
            setData(response.data.prediction)  // Assuming `prediction` is the key in the response
        } catch (error) {
            console.error("Error in prediction:", error)
        }
    }
  return (
    <div>
        <div className="main">
        <h1>Please Enter Values</h1>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-4" style={{backgroundColor:"bisque"}}>
                    <p>Longitude</p>
                    <input 
                        type="text"
                        name="longitude"
                        value={formValues.longitude} 
                        onChange={handleChange}/>
                </div>
                <div className="col-sm-4" style={{backgroundColor:"darkseagreen"}}>
                    <p>Latitude</p>
                    <input
                        type="text" 
                        name="latitude" 
                        value={formValues.latitude} 
                        onChange={handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4" style={{backgroundColor:"lightpink"}}>
                    <p>Depth</p>
                    <input
                        type="text" 
                        name="depth" 
                        value={formValues.depth} 
                        onChange={handleChange} />
                </div>
                <div className="col-sm-4" style={{backgroundColor:"turquoise"}}>
                    <p>Timestamp</p>
                    <input 
                        type="text" 
                        name="Timestamp" 
                        value={formValues.Timestamp} 
                        onChange={handleChange} />
                </div>
            </div>
            <div className="row">
                <input type="submit" value="PREDICT"/>
            </div>
        </form>
        <div className="row">
            {data && <p style={{color: 'black'}}>Prediction: {data}</p>}
        </div>
       
    </div>
    
    </div>
  )
}

export default EarthquakePrediction