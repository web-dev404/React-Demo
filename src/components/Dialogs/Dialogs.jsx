import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {Redirect} from "react-router-dom";
import {Form, Field} from "react-final-form";
import DialogsInput from "./DialogsInput";
import React from "react";
import {composeValidators, maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}
                                                                   avatar={d.avatar}/>);

    let messagesElements = dialogsPage.messages.map(m => <MessageItem id={m.id} key={m.id}
                                                                      oppositeMessage={m.oppositeMessage}
                                                                      myMessage={m.myMessage}/>);

    const onSubmit = (values) => {
        props.addMessage(values.newMessage);
        values.newMessage = '';
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>

            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm dialogsPage={dialogsPage}
                                addMessage={props.addMessage}
                                onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}
              render={({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <Field name="newMessage" validate={composeValidators(required, maxLengthCreator(10))}>
                              {({input, meta}) => (
                                  <div>
                                      <DialogsInput {...input} />
                                      {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
                                  </div>
                              )}
                          </Field>
                      </div>

                      <div>
                          <button className={s.send}>Отправить</button>
                      </div>
                  </form>
              )}
        />
    )
}

export default Dialogs;