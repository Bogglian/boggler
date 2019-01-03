import axios from 'axios';

export function getAudio(id) {
  return axios.get(`http://localhost:8080/board/${id}`);
}

export function writePosts(posts, headers) {
  return axios.post(`http://localhost:8080/board`, posts, headers);
}

export function modifyPosts(id, posts) {
  return axios.put(`http://localhost:8080/board/${id}`, posts);
}

export function getAudioList(posts) {
  return axios.get(`http://localhost:8080/board`, posts);
}
