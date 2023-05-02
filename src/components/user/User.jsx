import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions.js";


export const User = () => {
    const { isLoading, error, user } = useSelector(state => state.user);

    const {getUserById} = useActions();


    const getUserHandler = () => {
        getUserById(1);
    };

    return (
        <div>
            <button onClick={getUserHandler}>get user</button>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : user?.name ? (
                <h1>User:{user.name}</h1>
            ) : (
                <h1>User not found</h1>
            )}
        </div>
    );
};