import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            <p className={s.oppositeMessage}>{props.oppositeMessage}</p>
            <p className={s.myMessage}>{props.myMessage}</p>
        </div>
    );
}

export default MessageItem;