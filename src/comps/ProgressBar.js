import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setfile})=>{
    const {url, Progress} = useStorage(file);

    useEffect(() => {
        if(url){
            setfile(null)
        }
    }, [url, setfile])

    console.log(Progress, url);
    return(
    <div className="progress-bar" style={{width:Progress+'%'}}></div>
    )
}

export default ProgressBar;
