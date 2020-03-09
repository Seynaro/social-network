let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 2},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Relax"},
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ],
        }
    },
    _callSubscriber() {
        console.log("Hi");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-Post') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
        }

    },
};


window.store = store;

export default store;

