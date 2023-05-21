import React, { useEffect, useRef } from 'react';
import styles from './CameraPage.module.scss';
import Webcam from 'react-webcam';

const CameraPage = () => {
	// const videoRef = useRef(null);
	const webcamRef = useRef(null);

	useEffect(() => {
	  const constraints = { video: { facingMode: { exact: 'environment' } } };
  
	  navigator.mediaDevices.getUserMedia(constraints)
		.then(stream => {
		  webcamRef.current.video.srcObject = stream;
		  webcamRef.current.video.play();
		})
		.catch(error => {
		  console.error('Error accessing media devices.', error);
		});
	}, []);

//   const startStream = () => {
	// const constraints = { video: { facingMode: { exact: 'environment' } } };
	// navigator.getUserMedia({ video: true }).then((stream) => {
	// 	videoRef.current.srcObject = stream;
	// 	videoRef.current.play();
	// })
    // navigator.mediaDevices.getUserMedia(constraints)
    //   .then(stream => {
    //     videoRef.current.srcObject = stream;
    //     videoRef.current.play();
    //   })
    //   .catch(error => {
    //     console.error('Error accessing media devices.', error);
    //   });
//   };

  return (
    <div className={styles.container}>
		{/* <button onClick={startStream}>Начать обход</button>
      <video ref={videoRef}/> */}
	  <Webcam ref={webcamRef} />
    </div>
  );

	// const startCamera = () => {
	// 	navigator.mediaDevices
	// 		.getUserMedia({ video: true })
	// 		.then((stream) => {
	// 			const video = document.querySelector('video');
	// 			video.srcObject = stream;
	// 			video.onloadedmetadata = () => {
	// 				video.play();
	// 			};
	// 		})
	// 		.catch((err) => {
	// 			console.log(`Error: ${err}`);
	// 		});
	// };

	// return (
	// 	<div className={styles.container}>
	// 		Камера
	// 		<div>
	// 			<button onClick={startCamera}>Start Camera</button>
	// 			<video></video>
	// 		</div>
	// 	</div>
	// );
};

export default CameraPage;
