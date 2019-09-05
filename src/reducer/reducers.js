export const getMusicList = ( state = [], action ) => {
  switch (action.type) {
    case 'GET_MUSIC_PLAYLIST':
      return action.playlist
    default:
      return state
  }
}