import React, { useEffect, useContext, useState } from 'react';
import AdminPanel from '../../Admin/AdminPanel/AdminPanel';
import NotFound from './NotFound';
import { UserContext } from '../../../App';

const CheckAdmin = () => {

    const [display, setDisplay] = useState( <NotFound/> )

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setDisplay( <AdminPanel/> )
                }
            })
    }, [loggedInUser.email])

    return (
        <div className='w-100'>
            {
                display
            }
        </div>
    );
};

export default CheckAdmin;