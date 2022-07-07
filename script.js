import { VoiceRSS } from './speech.js';

// 116055e9650b43718f464b94c841bc69
class JokeTeller {
  constructor() {
    this.button = document.getElementById('button');
    this.button.addEventListener('click', async () => {
      const data = await this.fetchJokes();
      this.getSpeech(data);
    });
  }

  async fetchJokes() {
    try {
      const data = await axios.get('https://v2.jokeapi.dev/joke/Any', {
        params: {
          type: 'single',
        },
      });
      const joke = await data.data.joke;
      return joke;
    } catch (error) {
      console.log(error);
    }
  }

  getSpeech(value) {
    return VoiceRSS.speech({
      key: '116055e9650b43718f464b94c841bc69',
      hl: 'en-us',
      c: 'mp3',
      src: value,
      v: 'Linda',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
  }
}

const jokeTeller = new JokeTeller();
