import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileType = ['image/jpeg', 'image/png'];

    const handleChange = (e) => {
        let selected = e.target.files[0]; // This stores all the property of selected file in selected variable.

        if (selected && fileType.includes(selected.type)) {
            setFile(selected);
            setError(null);
            console.log(file);
        } else {
            setFile(null);
            setError("برجاء اختيار صورة من نوع  (png/jpeg)");
        }

    }

    return (
        <>
            <div className="input-group mb-3 btn btn-info btn-file">
                رفع صورة ..
                <input type="file" className="form-control" id="inputGroupFile02" name="upfile" onChange={handleChange} />
            </div>             
            <div className="output">
                {error && <div className='text-danger'>{error}</div>}
                {file && <div className='text-success'>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>

            <br></br>
            <select title=" الفئة " id="coll">
                    <option value="images">  المعرض  </option>
                    <option value="fb"> فلاش باك  </option>
                    <option value="art">الفنون</option>
                    <option value="pano">بانوراما اكتوبر</option>
                    <option value="nat"> الطبيعة  </option>
                    <option value="ath"> الاثار  </option>
                    <option value="hand"> الحرف اليدوية  </option>
                    <option value="hlifeBefore">  حياة كريمة قبل  </option>
                    <option value="hlifeBet">  حياة كريمة اثناء  </option>
                    <option value="hlifeAfter">  حياة كريمة بعد  </option>

                    </select>
        </>
    )
}

export default UploadForm
