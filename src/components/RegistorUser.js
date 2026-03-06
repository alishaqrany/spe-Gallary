import { useState } from "react";
import { authUser } from "../firebase/config"

const RegistorUser = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const login = (e) => {
        e.preventDefault();
        authUser.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(u => {
            console.log("Logged in successfully!!");
        }).catch( err => {
            console.error(err);
        })
    }

    // const signup = (e) => {
    //     e.preventDefault();
    //     authUser.createUserWithEmailAndPassword(credentials.email, credentials.password)
    //     .then(u => {
    //         console.log("Account Registered Successfully!!");
    //     }).catch( err => {
    //         console.error(err);
    //     })
    // }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <h1 className='text-center'>مرحبا بك في معرض حكاية ضوء</h1>
            <form className='container my-5 text-center col-md-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label lead">البريد الالكتروني</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={handleChange} />
                    <div id="emailHelp" class="form-text">ادخل البريد الالكتروني المسجل في قاعدة البيانات</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label lead">كلمة المرور</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={handleChange} />
                </div>
                <div className="d-flex mx-5">
                    <button type="submit" class="btn btn-primary mx-4 " onClick={login}>تسجيل الدخول</button>
                    {/* <button type="submit" class="btn btn-success mx-2" onClick={signup}>حساب جديد</button> */}
                </div>
            </form>
        </>
    )
}

export default RegistorUser
