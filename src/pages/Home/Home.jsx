import { useSelector } from "react-redux";
import {  selectUser } from "../../features/user/userSlice"

const Home = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Home</h1>
     {user ? <div className="app__body">
          <div>
            <h1>Hello {user.displayName}!</h1>
            <p>{user.email}</p>
            
          </div>
        </div> : <div>Please sign in</div>}
    </div>
  );
};

export default Home;
