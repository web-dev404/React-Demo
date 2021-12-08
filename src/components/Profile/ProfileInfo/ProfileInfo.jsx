import s from './ProfileInfo.module.css';
import Loader from "../../common/loader/Loader";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {UserPhotoLarge} from "../../common/UserPhotoComponent/UserPhotoComponent";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />
    } else {
        return (
            <div>
                <div className={s.content__user}>
                    <div className="user__avatar">
                        <UserPhotoLarge user={props.profile} />
                    </div>

                    <div className={s.user__data}>
                        <h3>{props.profile.fullName}</h3>
                        <div className={s.data__content}>
                            <p>{props.profile.aboutMe}</p>
                            <div>
                                {props.profile.lookingForAJob
                                ? <img src='https://image.shutterstock.com/image-vector/banner-yes-speech-bubble-poster-260nw-777369274.jpg' />
                                : <img src='https://www.lingvaflavor.com/wp-content/uploads/2015/07/no.png' />}</div>
                            <p>Education: school</p>
                            <p>Web-site: <a
                                href={props.profile.contacts.website}>{props.profile.contacts.website}</a>
                            </p>

                            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;