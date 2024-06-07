import { useState } from 'react'
function ProfileSetup() {

    const [profile, setprofile] = useState({
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
        // const { name, value } = e.target;
        // setProfile({ ...profile, [name]: value });
      };

    return (
        <div>
            <h1>
                Predict your Perfect Outfit
            </h1>
            <form>
                <label>
                    Age :
                    <input type="number"  name="age" value={profile.age} onChange={handleChange}/>
                </label>
                <label>
                    Weight :
                    <input type="number"  name="weight" value={profile.weight} onChange={handleChange} />
                </label>
                <label>
                    Height :
                    <input type="number"  name="height" value={profile.height} onChange={handleChange}/>
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
                    <input  type="number"  name="chestSize" value={profile.chestSize} onChange={handleChange}/>
                </label>
                <label>
                    Hip Size :
                    <input type="number"  name="hipSize" value={profile.hipSize} onChange={handleChange}/>
                </label>
                <label>
                    Dress Type :
                    <input type="number"  name="dressType" value={profile.dressType} onChange={handleChange} />
                </label>
                <label>
                    Occassion :
                    <input type="number"  name="occassion" value={profile.occassion} onChange={handleChange}/>
                </label>
                <label>
                    Dress Colour Preference :
                    <input type="number"  name="colourPreference" value={profile.colourPreference} onChange={handleChange} />
                </label>
            </form>
        </div>
    );

}
export default ProfileSetup;
