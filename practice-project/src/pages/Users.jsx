import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, addData } from "../store/slices/userDataReducer";

const Users = () => {
    const { users } = useSelector((store) => store.UserData);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((res) => dispatch(fetchData(res)))
            .catch((err) => console.log(err));
    }, [dispatch]);

    const addUser = () => {
        const payload = {
            'id': 1,
            'name': 'Metin',
            'surname': 'Ali',
            'email': 'metin@gmail.com'
        }
        dispatch(addData(payload))
    }
    return (
        <div>
            <button onClick={addUser}>Add User</button>
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
