import axios from 'axios';

export function getAudio(id) {
  return axios.get(`http://localhost:8080/audios/${id}`);
}

export function writePosts(posts) {
  return axios.post(`http://localhost:8080/audios`, posts);
}

export function modifyPosts(id, posts) {
  return axios.put(`http://localhost:8080/audios/${id}`, posts);
}

export function getAudioList(posts) {
  return axios.get(`http://localhost:8080/audios`, posts);
}
