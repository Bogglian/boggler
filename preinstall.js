const fs = require('fs');
const wget = require('wget-improved');
const ProgressBar = require('progress');
const tar = require('tar');

function Filedownload(src, output) {
  const download = wget.download(src, output);
  download.on('error', console.error);

  let bar = null;
  download.on('progress', progress => bar.tick(progress));
  download.on('start', () => {
    console.log(
      `\nNow downloading the ${output} files, this will take a few moments...`,
    );
    bar = new ProgressBar('  downloading [:bar] :percent :etas', {
      width: 20,
      total: 100000 / 2,
    });
  });

  download.on('end', async () => {
    bar.tick(100000 / 2);
    console.log('Extracting tar archive...');
    await tar.x({ file: output });
    console.log('Done extracting archive');
    console.log('\nRemoving temporary tar archive...');
    fs.unlinkSync(output);
  });
}

const modelSrc =
  'https://github.com/mozilla/DeepSpeech/releases/download/v0.4.1/deepspeech-0.4.1-models.tar.gz';
const modelOutput = 'models.tar.gz';
Filedownload(modelSrc, modelOutput);

const audioSrc =
  'https://github.com/mozilla/DeepSpeech/releases/download/v0.4.1/audio-0.4.1.tar.gz';
const audioOutput = 'audio.tar.gz';
Filedownload(audioSrc, audioOutput);
