import Box from './components/Box';
import Heart from './components/Heart';
import MP3 from './components/MP3';
let linkMP3 = '/anh-yeu-em-cuc.mp3';

function App() {
  return (
    <>
      <MP3 link={linkMP3} />
      <h2 className="typing">I LOVE YOU PẶC PẶC...</h2>

      <div className="container">
        <Box />
        <Heart width={'500'} height={'500'} />
      </div>
    </>
  );
}

export default App;
