import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const { isLoading, users, error } = useSelector(state => state.user)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])


  return (
    <div>
      <h1>User View</h1>
      {isLoading && <h3>Loading ....</h3>}
      {users.map((_user) => {
        return <p key={_user}>{_user}</p>
      })}
      {error && <h3>ERROR OCCURRED In DATA FETCHING</h3>}
    </div>
  );
};

export default UserView;
