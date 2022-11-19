import React, {useEffect, useState} from 'react';

const srcText = [
  'I Love You chiu chiu...',
  'Anh yêu cưngggggg',
  'Chúng mình sẽ càng yêu nhau hơn',
  'Em không thoát được đâu =)))',
  'Em là của anh...',
  'Giận dỗi anh ít thôi, không anh hôn đếy =)))',
  'Anh yêu Dung nhiều lắm S2'
];

function randomText() {
  return srcText[Math.floor(Math.random() * srcText.length)];
}
export default function Typo() {
  const [text, setText] = useState(randomText());
  const [typing, setTyping] = useState('');
  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
          let result = text.slice(0, i);
          setTyping(result);
          if (i === text.length) {
            console.log(result);
            setText((text) => randomText());
          }
        }, 98 * i);
      }
    }, text.length * 98);
  }, [text]);
  return (
    <h2 className={'typing pointer'} id={'typing'}>
      {typing}
    </h2>
  );
}
