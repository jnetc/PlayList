import database from '../database/database'

export const getPlayList = (playlist) => ({
  type: 'GET_MUSIC_PLAYLIST',
  playlist
})
export const getUsers = (users) => ({
  type: 'GET_USERS',
  users
})

const convert = (snapshot) => {
  // Arr for new object
  const arr = []
  // Convert parsed obj to arr
  const fireArr = Object.entries(snapshot.val())
  // Pushing to arr       
  fireArr.forEach(item => {
    arr.push({
      id: item[0],
      ...item[1]
    })
  })
  return arr   
}

export const getPlayListFromFirestore = () => {
  return dispatch => {
    return database
      .ref('music-service/playlist')
      .once("value")
      .then(snapshot => {
         const newArr = convert(snapshot)
          // Checking arr & dispatch to store
        if (newArr.length > 0 && newArr !== [] && newArr !== undefined) {
          dispatch(getPlayList(newArr)) 
        }
    })
  }
}