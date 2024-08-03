import Skeleton from 'react-loading-skeleton';

const CountContainerSkeleton = () => {
  return (
    <div className="count-container" data-testid="count-container">
      <div className="followers-count">
        <span className="count" data-testid="info">
          <Skeleton baseColor="#181c1c" width={20} />
        </span>
        <p>
          <Skeleton baseColor="#181c1c" width={100} />
        </p>
      </div>
      <div className="vertical-line"></div>
      <div className="following-count">
        <span className="count" data-testid="info">
          <Skeleton baseColor="#181c1c" width={20} />
        </span>
        <p>
          <Skeleton baseColor="#181c1c" width={100} />
        </p>
      </div>
    </div>
  );
};
export default CountContainerSkeleton;
