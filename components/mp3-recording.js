import MicRecorder from 'mic-recorder-to-mp3';
import { useEffect, useState } from 'react';

const Recorder = () => {
  const Mp3Recorder = new MicRecorder({ bitRate: 128 });
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        // this.setState({ isBlocked: false });
        setIsRecording(false);
      },
      () => {
        console.log('Permission Denied');
        // this.setState({ isBlocked: true })
        setIsRecording(true);
      },
    );
  },[]);

  const handleStart = () => {
    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setIsRecording(true);
        }).catch((e) => console.error(e));
    }
  }

  const handleStop = () => {
    Mp3Recorder
    .stop()
    .getMp3()
    .then(([buffer, blob]) => {
      const blob_url = URL.createObjectURL(blob)
      setBlobURL(blob_url);
      setIsRecording(false);
    }).catch((e) => console.log(e));
  }

  return (
    <div>
      <button onClick={handleStart} disabled={isRecording}>Record</button>
      <br />
      <button onClick={handleStop} disabled={!isRecording}>Stop</button>
      <br />
      <button>
        <audio src={blobURL} controls="controls" />
      </button>
    </div>
  )
}

export default Recorder;
