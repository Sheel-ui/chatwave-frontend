import '@components/oauth/OAuth.scss';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const OAuth = () => {
  return (
    <div className="oAuth">
      <div className="auth-item">
        <FaGoogle></FaGoogle>
        <span>Continue with Google</span>
      </div>
      <div className="auth-item">
        <FaFacebook></FaFacebook>
        <span>Continue with Facebook</span>
      </div>
      <div className="divider">
        <div className="line"></div>
        <p className="seperator">or</p>
      </div>
    </div>
  );
};

export default OAuth;
