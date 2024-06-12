import { useState } from 'react'
function ProfileSetup() {
    const [suggestions, setSuggestions] = useState([]);

    const [profile, setProfile] = useState({
        age: "",
        height: "",
        weight: "",
        skinTone: "",
        chestSize: "",
        hipSize: "",
        dressType: "",
        occassion: "",
        colourPreference: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/api/recommendations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile),
          });
          const data = await response.json();
          console.log("suggestions", data.suggestions)
          setSuggestions(data.suggestions);
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      };

    return (
        <div className='form-container'>
            <h1 className='heading'>
                Predict your Perfect Outfit
            </h1>
            <form className='profile-setup' onSubmit={handleSubmit}>
                <label>
                    Age :
                    <input type="number" name="age" value={profile.age} onChange={handleChange} />
                </label>
                <label>
                    Weight :
                    <input type="number" name="weight" value={profile.weight} onChange={handleChange} />
                </label>
                <label>
                    Height :
                    <input type="number" name="height" value={profile.height} onChange={handleChange} />
                </label>
                <label>
                    Skin Tone :
                    <select name="skinTone" value={profile.skinTone} onChange={handleChange} required>
                        <option value="" >Select Skin Tone</option>
                        <option value="light" >Light</option>
                        <option value="medium" >Medium</option>
                        <option value="dark" >Dark</option>
                    </select>
                </label>
                <label>
                    Chest size :
                    <input type="number" name="chestSize" value={profile.chestSize} onChange={handleChange} />
                </label>
                <label>
                    Hip Size :
                    <input type="number" name="hipSize" value={profile.hipSize} onChange={handleChange} />
                </label>
                <label>
                    Dress Type :
                    <input type="text" name="dressType" value={profile.dressType} onChange={handleChange} />
                </label>
                <label>
                    Occassion :
                    <input type="text" name="occassion" value={profile.occassion} onChange={handleChange} />
                </label>
                <label>
                    Dress Colour Preference :
                    <input type="text" name="colourPreference" value={profile.colourPreference} onChange={handleChange} />
                </label>
                <button type="submit"> Get Suggestions
                </button>
            </form>
        </div>
    );

}
export default ProfileSetup;
