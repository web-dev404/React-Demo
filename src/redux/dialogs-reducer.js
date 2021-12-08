const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Imron',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ-HkOk0nyWwdR6GNhI19KyuIDOyg-_w_tQ&usqp=CAU'
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTyYeCbYlayBm3B3AYcTwmm9ZhZSvFxdC_Q&usqp=CAU'
        },
        {
            id: 3,
            name: 'Valera',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUnQFDFW38qwi8Z3oUxikMFTPXfwLaV5i_Q&usqp=CAU'
        },
        {
            id: 4,
            name: 'Rashod',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeQWm3jVI6mh6QyYlw1WK797YgdmI7vUZiA&usqp=CAU'
        },
        {
            id: 5,
            name: 'Aleksey',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYfFB0g8O8IC9lQJWQn-v2pcLHPQpWc1kew&usqp=CAU'
        }
    ],
    messages: [
        {id: 1, oppositeMessage: 'Hello', myMessage: 'It\'s me Imron'},
        {id: 2, oppositeMessage: 'How is ur Imron?', myMessage: 'It\'s me Imron2'},
        {id: 3, oppositeMessage: 'Hey-ooo', myMessage: 'It\'s me Imron3'},
        {id: 4, oppositeMessage: 'Whats up man?', myMessage: 'It\'s me Imron4'},
        {id: 5, oppositeMessage: 'U\'re the best', myMessage: 'It\'s me Imron5'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                oppositeMessage: 'oppositeMessage',
                myMessage: action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage});