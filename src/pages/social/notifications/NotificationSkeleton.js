import Skeleton from 'react-loading-skeleton';
import '@pages/social/notifications/Notification.scss';

const NotificationSkeleton = () => {
  return (
    <>
      <div className="notifications-container" data-testid="notification-skeleton">
        <div className="notifications">Notifications</div>
        <div className="notifications-box">
          {[1, 2, 3, 4, 5].map((notification, index) => (
            <div className="notification-box" key={index}>
              <div className="notification-box-sub-card">
                <div className="notification-box-sub-card-media">
                  <div className="notification-box-sub-card-media-image-icon">
                    <Skeleton baseColor="#565656" circle height={40} width={40} />
                  </div>
                  <div className="notification-box-sub-card-media-body">
                    <h6
                      className="title"
                      style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}
                    >
                      <Skeleton baseColor="#565656" width={500} height={20} />
                      <small className="subtitle">
                        <Skeleton baseColor="#565656" width={40} className="trash" />
                      </small>
                    </h6>
                    <div className="subtitle-body">
                      <small className="subtitle">
                        <Skeleton baseColor="#565656" width={40} />
                      </small>
                      <p className="subtext">
                        <Skeleton baseColor="#565656" width={100} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default NotificationSkeleton;
