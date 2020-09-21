import io from 'socket.io-client'

import { devURL } from '../store/api'


const socket = io(devURL)
const me = localStorage.getItem('me') || ''

const socketConfig = (store : any) => {
  socket.on('connect', () => {
    console.log('connected')
    socket.emit('changeOnline', { online: 'online', userId: me })
  });

  socket.on('disconnect', () => {
    console.log('disconnected')
  });

  return socket
};

export { socketConfig }
