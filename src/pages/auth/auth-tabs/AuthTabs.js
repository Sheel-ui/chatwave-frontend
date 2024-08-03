import { useEffect, useState } from 'react';
import '@pages/auth/auth-tabs/AuthTabs.scss';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import useLocalStorage from '@hooks/useLocalStorage';
import { Link, useNavigate } from 'react-router-dom';
import { Utils } from '@services/utils/utils.service';
import PageLoader from '@components/page-loader/PageLoader';

const AuthTabs = () => {
  const [type, setType] = useState('Sign In');
  const keepLoggedIn = useLocalStorage('keepLoggedIn', 'get');
  const [environment, setEnvironment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const env = Utils.appEnvironment();
    setEnvironment(env);
    if (keepLoggedIn) navigate('/app/social/streams');
  }, [keepLoggedIn, navigate]);

  const toggleType = () => {
    setType((prevType) => (prevType === 'Sign In' ? 'Sign Up' : 'Sign In'));
  };

  return (
    <>
      {keepLoggedIn ? (
        <PageLoader />
      ) : (
        <div className="container-wrapper">
          <div className="environment">{environment}</div>
          <figure className="circle1"></figure>
          <figure className="circle2"></figure>
          <div className="container-wrapper-auth">
            <div className="tabs">
              <div className="tabs-auth">
                {type === 'Sign In' && (
                  <div className="tab-item">
                    <Login />
                  </div>
                )}
                {type === 'Sign Up' && (
                  <div className="tab-item">
                    <Register />
                  </div>
                )}
                <div onClick={toggleType} className="under-links">
                  {type === 'Sign In' ? (
                    <span className="signup">
                      don&apos;t have an account? <b>Create an account</b>
                    </span>
                  ) : (
                    <span className="login">
                      already have an account? <b>Sign in</b>
                    </span>
                  )}
                  <Link to={'/forgot-password'}>
                    <span className="forgot-password">Forgot password?</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthTabs;
