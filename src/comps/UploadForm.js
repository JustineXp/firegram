import React, {useState} from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () =>{

    const [File, setFile] = useState(null);
    const [Error, setError] = useState(null);

    const handleChange = (e)=>{
        let types = ['image/png', 'image/jpeg']
        let selected = e.target.files[0];
        // console.log(e.target);

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please Select an Image (png or jpeg)');
        }

    }

    return(
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {Error && <div className="error">{Error}</div>}
                {File && <div className="image">{File.name}</div>}
                {File && <ProgressBar file={File} setfile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;