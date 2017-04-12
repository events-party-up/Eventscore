export default function eventsReducer(state = [], action) {
  switch (action.type) {
    case 'REQUEST_EVENTS':
      return state;
    case 'RECEIVE_EVENTS':
      return action.events;
    // ...other actions
    default:
      return state;
  }
}