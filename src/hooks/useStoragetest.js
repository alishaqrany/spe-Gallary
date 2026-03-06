import {useState, useEffect} from 'react'
import {projectStorage, projectFirestore, timestamp} from '../firebase/config'

const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null); 
    var select= document.getElementById('coll');
    var value= select.options[select.selectedIndex].value;
    useEffect(() => {
        // References
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection(value);



        storageRef.put(file).on('state_changed', (snap) => {
            let progressPerc = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(progressPerc);
        }, (err) =>{
            setError(err);
        }, async () => {
            const urlPath = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url: urlPath, createdAt})
            setUrl(urlPath);
        })
    }, [file]);
    return (
        {progress, url, error}
    )
}

export default useStorage
