const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Matvey' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Artem' },
        { id: 6, name: 'Pasha' }
    ],
    messages: [
        { id: 1, message: 'Hi', author: 'me' },
        { id: 2, message: 'Hello', author: 'other' },
        { id: 3, message: 'How are you', author: 'me' },
        { id: 3, message: 'Good', author: 'other' },
        { id: 5, message: 'And you', author: 'other' },
        { id: 6, message: 'Good', author: 'me' }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.newMessageBody,
                author: 'me'
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            return  stateCopy;
        }
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE , newMessageBody})

export default dialogsReducer