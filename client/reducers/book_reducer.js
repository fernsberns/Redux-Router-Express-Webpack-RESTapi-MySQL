import { GET_BOOK } from '../actions/types';

// export default function(state = {}, action){
//   switch(action.type){
//     case FETCH_MESSAGE:
//       return { ...state, message: action.payload };
//       break;
//     default:
//      return state;
//   }
// }


// const booksReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'GET_BOOK':
//       //action.data  <--- here

//       return action.payload;
//       break;
//     default:
//       return state;
//   }
// };

// export default booksReducer;


const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BOOK":
    state = {...state, book: action.payload};
    case "FETCH_SUCCESS": 
    state =  {...state, book: action.payload};
      case "POST_BOOK":
    state = {...state,book:action.payload}
    default:
      return state;
  }
}



export default booksReducer;



// export default function (state = null, action) {
//   switch (action.type) {
//       case 'GET_BOOK':
//           return action.payload;
//           break;
//   }
//   return state;
// }
