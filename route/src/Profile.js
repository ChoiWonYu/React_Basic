import {useParams} from 'react-router-dom'
const data={
    choi : {
        name : 'choi',
        description : 'studying react',
    }
}

const Profile=()=>{
    const {username}=useParams();
    const profile=data[username];
    if(!profile)return <div>존재하지 않는 사용자입니다.</div>
    return(
        <div>
            <h3>{username}</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;