import Skeleton from 'react-loading-skeleton';

const BasicInfoSkeleton = () => {
  return (
    <div className="side-container" data-testid="basic-info">
      <div className="side-container-header">
        <p>
          <Skeleton baseColor="#181c1c" width={70} />
        </p>
        <p className="editBtn">
          <Skeleton baseColor="#181c1c" width={20} />
        </p>
      </div>
      <div className="side-container-body">
        <div className="side-container-body-about">
          <Skeleton baseColor="#181c1c" height={30} width={350} />
        </div>
      </div>
      <div className="side-container-body">
        <div className="side-container-body-icon">
          <Skeleton baseColor="#181c1c" width={20} className="icon" />
        </div>
        <div className="side-container-body-content">
          <Skeleton baseColor="#181c1c" height={20} />
        </div>
      </div>

      <div className="side-container-body">
        <div className="side-container-body-icon">
          <Skeleton baseColor="#181c1c" width={20} className="icon" />
        </div>
        <div className="side-container-body-content">
          <Skeleton baseColor="#181c1c" height={20} />
        </div>
      </div>

      <div className="side-container-body">
        <div className="side-container-body-icon">
          <Skeleton baseColor="#181c1c" width={20} className="icon" />
        </div>
        <div className="side-container-body-content">
          <Skeleton baseColor="#181c1c" height={20} />
        </div>
      </div>
    </div>
  );
};
export default BasicInfoSkeleton;
