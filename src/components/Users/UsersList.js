import Card from "../Ui/Card";
import classes from "./UsersList.module.css"

const UserList = (props) => {

    if (props.users.length === 0 ) {
        return <h2 style={{textAlign: 'center', color: 'white'}}>Nada Ainda</h2>
    } else {
            return (
        <Card className={classes.users}>
        <ul>
            {props.users.map(user =>
                <li key={user.id}>
                    {user.name} {user.age}( years old)
                </li>
            )}
        </ul>
        </Card>
     )
    };
};
export default UserList