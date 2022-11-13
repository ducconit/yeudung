import Box from './components/Box';
import MP3 from './components/MP3';
let linkMP3 = '/anh-yeu-em-cuc.mp3';

function App() {
  return (
    <div>
      <MP3 link={linkMP3} />
      <Box />
    </div>
  );
}

export default App;
