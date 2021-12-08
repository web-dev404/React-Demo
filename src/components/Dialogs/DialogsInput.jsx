import s from "./Dialogs.module.css";

const dialogsInput = ({...props}) => (
    <div>
        <textarea {...props} className={s.textarea} placeholder='сообщение' />
    </div>
)

export default dialogsInput;