import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const GET_PLAYER = 'GET_PLAYER';

export function getPlayer(player) {
  const url = `${ROOT_URL}/${player}`;
  const request = axios.get(url);

  return {
    type: GET_PLAYER,
    payload: request
  };
}
