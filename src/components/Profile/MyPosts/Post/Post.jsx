import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.author} src="http://www.wrnrtv.com/wp-content/uploads/2017/05/male.png" alt=""/>

            <p className={s.text}>{props.text}</p>
            <div className={s.like}>
                <span>Лайки: </span>
                <span className={s.likesNumber}>{props.likesNumber}</span>
            </div>
        </div>
    );
}

export default Post;