import s from './UserPhotoComponent.module.scss';
import userPhoto from "../../../assets/images/user.png";

export const UserPhotoSmall = (props) => {
    return (
        <img className={s.avatar} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=""/>
    )
}

export const UserPhotoLarge = (props) => {
    return (
        <img className={s.largeAvatar} src={props.user.photos.large != null ? props.user.photos.large : userPhoto} alt=""/>
    )
}