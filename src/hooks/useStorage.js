import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp} from "../firebase/config";

const useStorage =(file)=>{
    const [Error, setError] = useState(null);
    const [url, seturl] = useState(null);
    const [Progress, setProgress] = useState(0)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap)=>{
            // console.log(snap);
            let Percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(Percentage)
        },(err)=>{
            setError(err)
        },async()=>{
            const createdAt = timestamp();
            let url = await storageRef.getDownloadURL();
            seturl(url);
            collectionRef.add({url, createdAt})
        })
    }, [file])

    return { url, Error, Progress}
}

export default useStorage;