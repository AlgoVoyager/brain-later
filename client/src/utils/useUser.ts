import axios from 'axios'
import { setUserDetails } from '../redux/features/userSlice'

export const getUserDetails = () => {
    console.log("fetching user...")
//   const dispatch = useAppDispatch()
    const userDetails = axios.get('/v1/user/getUser', {
      headers: {
        'Content-Type': 'application/json',
        'token': `${localStorage.getItem('token')}`
      }
    })
    .then(res=>res.data)
    // .then(data=>console.log(data))
    .catch(err=>console.log(err))
    return userDetails;
}

