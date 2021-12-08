import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, text: 'first post', likesNumber: 150},
        {id: 2, text: 'second post', likesNumber: 50},
        {id: 3, text: 'third post', likesNumber: 35},
        {id: 4, text: 'fourth post', likesNumber: 61}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPost('Imron is THE BEST');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(2);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});