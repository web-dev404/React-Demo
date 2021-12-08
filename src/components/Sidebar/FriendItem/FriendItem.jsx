import s from '../Sidebar.module.css';

const FriendItem = (props) => {
    return (
        <div className={s.friendsItem}>
            <div className={s.friendsRound}></div>
            <p className={s.friendsText}>{props.name}</p>
        </div>
    );
}

export default FriendItem;