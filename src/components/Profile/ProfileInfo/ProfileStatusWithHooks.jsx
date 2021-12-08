import s from './ProfileInfo.module.css';
import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);

        props.updateStatus(status);
    }

    const updateInput = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <div>
                <span className={s.statusText} onDoubleClick={activateEditMode}>{props.status || '----'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={updateInput} value={status}
                       type="text"/>
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;