import { useSelector } from "react-redux";
import {  selectUser } from "../../features/user/userSlice"

const Home = () => {
  const user = useSelector(selectUser);

  return (
    <div>
     {user ? <div className="app__body">
          <div>
            <h1>Hello {user.displayName}!</h1>
          </div>
        </div> : <h1>Please sign in</h1>}
    </div>
  );
};

export default Home;
