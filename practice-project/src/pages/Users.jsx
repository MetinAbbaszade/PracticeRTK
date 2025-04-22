import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/slices/userDataReducer";

const Users = () => {
    const { users } = useSelector((store) => store.UserData);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((res) => dispatch(fetchData(res)))
            .catch((err) => console.log(err));
    }, [dispatch]);
    console.log(users)
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Users;
