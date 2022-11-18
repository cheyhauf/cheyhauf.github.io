import Lottie from 'react-lottie-player'
import lottieJson from './triangulo-carga-loading-4014221.json'

const TriangleLoading = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
    />
  );
}

export default TriangleLoading;