import React, { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { UserContext } from '../../App'

import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import Footer from '../SharedComponents/Footer/Footer';
import './Login.css'

import firebaseConfig from '../../firebase.config';

import Navbar from '../SharedComponents/Navbar/Navbar';

const Login = () => {

    const { user } = useParams();

    const [formForUser, setFromForUser] = useState(user);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const onSignIn = data => {
        const { name, email, password, confirmPassword } = data;
        if (password === confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    const { email } = user;

                    user.updateProfile({
                        displayName: name,
                        photoURL: 'https://i.ibb.co/q72R3bs/user.png'
                    }).then(function () {
                        const newLoggedInUser = { name, email, imageURL: 'https://i.ibb.co/q72R3bs/user.png' };
                        setLoggedInUser(newLoggedInUser);
                        localStorage.setItem( 'loggedInUser', JSON.stringify(newLoggedInUser));
                        history.replace(from);
                    }).catch(function (error) {
                        alert(error);
                    });
                })
                .catch((error) => {
                    var errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        else {
            alert(`Passwords didn't match`);
        }
    }



    const onLogIn = data => {
        console.log(data);
        const { login_email, login_password } = data;
        firebase.auth().signInWithEmailAndPassword(login_email, login_password)
            .then((userCredential) => {
                const user = userCredential.user;
                const { displayName, email, photoURL } = user;
                const newLoggedInUser = { name: displayName, email, imageURL: photoURL };
                setLoggedInUser(newLoggedInUser);
                localStorage.setItem( 'loggedInUser', JSON.stringify(newLoggedInUser));
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
            });
    }



    // Google Sign-In / Log-In Method

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                const newLoggedInUser = { name: displayName, email, imageURL: photoURL };
                setLoggedInUser(newLoggedInUser);
                localStorage.setItem( 'loggedInUser', JSON.stringify(newLoggedInUser));
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

                alert(errorCode, errorMessage);
            });
    }


    // Checking Existing User 

    let form = "";
    if (user === 'new') {
        form = <form className='login-form' onSubmit={handleSubmit(onSignIn)} >
            <h4 className="login-title">Create an account</h4>

            < input className='input' name="name" {...register('name')} placeholder="Name" required/>
            {errors.name && <span className='error'>Name is required</span>}

            < input className='input' name="email" {...register('email')} placeholder="Email" required/>
            {errors.email && <span className='error'>Email is required</span>}

            < input className='input' type='password' name="password" {...register('password')} placeholder="Passowrd" required/>
            {errors.password && <span className='error'>Password is required</span>}

            < input className='input' type='password' name="confirmPassword" {...register('confirmPassword')} placeholder="Confirm passowrd" required/>
            {errors.confirmPassword && <span className='error'>This field is required</span>}

            <input className='submit-button' type="submit" value="Create an account" />

            <p className='text-center mt-2 text-white'><small>Already have an account?  <Link to='/login/existing' className='create-acc-link'> Login</Link></small></p>
        </form>
    }
    if (user === 'existing') {
        form = "";
        form = <form className='login-form' onSubmit={handleSubmit(onLogIn)} >
            <h4 className="login-title">Login</h4>
            < input className='input' name="login_email" {...register('login_email')} placeholder="Email" required/>
            {errors.login_email && <span className='error'>Email is required</span>}

            < input className='input' type='password' name="login_password" {...register('login_password')} placeholder="Passowrd"  required/>
            {errors.login_password && <span className='error'>Password is required</span>}

            <input className='submit-button' type="submit" value="Login" />

            <p className='text-center mt-2 text-white'><small>Don't have an account?  <Link to='/login/new' className='create-acc-link'> Create a new one</Link></small></p>
        </form>
    }


    return (
        <div>
            <Navbar/>

            <div className="row">
                <div className="col-md-6 login-bg"></div>
                <div className="col-md-6 bg-blue container d-flex justify-content-center align-items-center min-100vh m-0 p-0">
                    <div className="py-5">
                        {form}

                        <div className="d-flex justify-content-center">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <button onClick={handleGoogleSignIn} className="btn login-with-google my-2"><FontAwesomeIcon icon={faGoogle} className='me-3' />Continue with google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;