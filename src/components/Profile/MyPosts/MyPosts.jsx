import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from 'react';
import {Field, Form} from "react-final-form";
import ProfileInput from "./ProfileInput";
import {required, maxLengthCreator, composeValidators} from "../../../utils/validators/validators";

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.onAddPost}
              render={({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                      <Field name="newPostMessage" validate={composeValidators(required, maxLengthCreator(10))}>
                          {({input, meta}) => (
                              <div>
                                  <ProfileInput {...input} />
                                  {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
                              </div>
                          )}
                      </Field>

                      <button className={s.input}>Add post</button>
                  </form>
              )}
        />
    );
}

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p => <Post id={p.id} key={p.id} text={p.text} likesNumber={p.likesNumber}/>);

    const onAddPost = (values) => {
        props.addPost(values.newPostMessage);
        values.newPostMessage = '';
    }

    return (
        <div className={s.posts}>
            <p>My posts</p>

            <AddMessageForm onAddPost={onAddPost}/>
            {postsElements}
        </div>
    );
});

export default MyPosts;