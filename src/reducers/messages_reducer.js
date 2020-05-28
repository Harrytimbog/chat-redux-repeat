import { FETCH_MESSAGES, MESSAGES_POSTED, CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGES_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELECTED: {
      return []; // Channel has changed. clearing view.
    }
    default:
      return state;
  }
}
