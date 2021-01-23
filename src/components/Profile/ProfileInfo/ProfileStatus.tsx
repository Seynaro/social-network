import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatusTC: (status: string) => {}
}

const ProfileStatus: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

        return (
            <div>
                {!editMode ?
                    <div>
                        <b>Status:</b> <span onDoubleClick={activateEditMode}>{status || "-----"}</span>
                    </div>
                    : <div>
                        <input onChange={onStatusChange} autoFocus={true}
                               onBlur={deactivateEditMode}
                               value={status}/>
                    </div>
                }
            </div>
        )
    }

export default ProfileStatus;