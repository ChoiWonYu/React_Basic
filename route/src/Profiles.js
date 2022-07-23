import Profile from "./Profile";
import {Link,Route,Routes} from 'react-router-dom';

const Profiles=()=>{
    return(
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to='/profile/choi'>Choi</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/'
                element={'사용자를 선택해주세요.'}
                />
            <Route path=':username' element={<Profile/>}/>
            </Routes>
        </div>
        
    )
}

export default Profiles;