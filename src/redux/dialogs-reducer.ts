const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Relax"},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ] as Array<DialogType>,
};

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state
    }
};

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => {
    return {type: SEND_MESSAGE, newMessageBody}
};


export default dialogsReducer;