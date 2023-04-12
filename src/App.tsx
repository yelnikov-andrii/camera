import React, { useEffect, useRef } from 'react';
import './App.css';
import { MyButton } from './Components/MyButton';
import button1 from './images/button1.svg'
import button2 from './images/button2.svg'
import button3 from './images/button3.svg'
import button4 from './images/button4.svg'
import button5 from './images/button5.svg'
import { Camera } from './Components/Camera';
import { useLoading } from './hooks/useLoading';

function App() {
  const videoRef: any = useRef(null);
  const { loading, showLoading } = useLoading();
  const [screen, setScreen] = React.useState(1);
  const [popupOpen, setPopupOpen] = React.useState(false);

  const getVideo = (facingMode: any) => {
    const constraints = {
      video: { facingMode: facingMode },
      audio: false
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        let video: any = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((e) => {
        console.log(e);
      })
  }

  useEffect(() => {
    getVideo('user')
  }, []);

  const changeScreen = React.useCallback(() => {
    showLoading();
    setScreen(prev => {
      if (prev >= 3) {
        prev = 2;
        return prev;
      }

      return prev + 1
    });
  }, [showLoading])

  const backToMainScreen = React.useCallback(() => {
    if (screen === 1) {
      return;
    }
   showLoading();
    setScreen(1);
  }, [showLoading])

  const showPopup = React.useCallback(() => {
    if (popupOpen === true) {
      return;
    }
    setPopupOpen(true)
    showLoading();
    setScreen(4);
    setPopupOpen(true);
  }, [popupOpen, showLoading])
  
  return (
    <div className="App">
      <div className='block'>
      <Camera
        screen={screen}
        loading={loading}
        videoRef={videoRef}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
      />
      <div className='count'>
          {`${screen - 1} / 3`}
        </div>
      <div className='menu'>
        <MyButton 
          img={button1}
          size="medium"
          click={backToMainScreen}
        />
        <MyButton 
          img={screen === 1 ? button2 : button5}
          click={() => {
            changeScreen()
          }}
          size="large"
        />
        <div>
        <MyButton 
          img={button4}
          size="small"
          smallBtnUp={true}
        />
        <MyButton 
          img={button3} 
          size="small"
          smallBtnUp={false}
          click={showPopup}
        />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
