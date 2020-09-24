import profileReducer, {addPostAC, deletePostAC} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 2},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 2, message: "It's my first post", likesCount: 11},
    ]
};


it('length of posts should be increment', () => {
    let action = addPostAC('first test');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPostAC('first test');
    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('first test');
});

it('length of posts should be decrement', () => {
    let action = deletePostAC(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
