import Skeleton from 'react-loading-skeleton';
import '@components/posts/post-form/PostForm.scss';

const PostFormSkeleton = () => {
  return (
    <div className="post-form" data-testid="post-form-skeleton">
      <div className="post-form-row">
        <div className="post-form-header">
          <h4 className="post-form-title">
            <Skeleton baseColor="#565656" width={70} />{' '}
          </h4>
        </div>
        <div className="post-form-body">
          <div className="post-form-input-body">
            <Skeleton baseColor="#565656" circle height="100%" containerClassName="avatar-skeleton" />
            <Skeleton baseColor="#565656" style={{ width: '25vw', marginLeft: '15px', height: '20px' }} />
          </div>
          <ul className="post-form-list">
            <Skeleton baseColor="#565656" style={{ width: '80px', marginLeft: '15px', height: '40px' }} />
            <Skeleton baseColor="#565656" style={{ width: '80px', marginLeft: '15px', height: '40px' }} />
            <Skeleton baseColor="#565656" style={{ width: '80px', marginLeft: '15px', height: '40px' }} />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PostFormSkeleton;
