import CreatePost  from '../Components/CreatePost'
export default function Profile({token}){
   
    return(
        <div>
            <h1>Welcome to your Profile</h1>
            <CreatePost handleSubmit={handleSubmit}/>
        </div>
    )
}