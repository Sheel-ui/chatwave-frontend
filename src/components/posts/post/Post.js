import Avatar from '@components/avatar/Avatar';
import { timeAgo } from '@services/utils/timeago.utils';
import PropTypes from 'prop-types';
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';
import { find } from 'lodash';
import { feelingsList, privacyList } from '@services/utils/static.data';
import '@components/posts/post/Post.scss';
import { Utils } from '@services/utils/utils.service';
import PostCommentSection from '@components/posts/post-comment-section/PostCommentSection';
import { useSelector } from 'react-redux';
import ReactionsModal from '@components/posts/reactions/reactions-modal/ReactionsModal';
import useLocalStorage from '@hooks/useLocalStorage';
import CommentInputBox from '@components/posts/comments/comment-input/CommentInputBox';
import CommentsModal from '@components/posts/comments/comments-modal/CommentsModal';

const Post = ({ post, showIcons }) => {
  const { reactionsModalIsOpen, commentsModalIsOpen } = useSelector((state) => state.modal);
  const selectedPostId = useLocalStorage('selectedPostId', 'get');
  const getFeeling = (name) => {
    const feeling = find(feelingsList, (data) => data.name === name);
    return feeling?.name;
  };

  const getPrivacy = (type) => {
    const privacy = find(privacyList, (data) => data.topText === type);
    return privacy?.icon;
  };

  return (
    <>
      {reactionsModalIsOpen && <ReactionsModal />}
      {commentsModalIsOpen && <CommentsModal />}
      <div className="post-body" data-testid="post">
        <div className="user-post-data">
          <div className="user-post-data-wrap">
            <div className="user-post-image">
              <Avatar
                name={post?.username}
                bgColor={post?.avatarColor}
                textColor="#ffffff"
                size={40}
                avatarSrc={post?.profilePicture}
              />
            </div>
            <div className="user-post-info">
              <div className="inline-title-display">
                <h5 data-testid="username">
                  {post?.username}
                  {post?.feelings && (
                    <div className="inline-display" data-testid="inline-display">
                      is feeling <img className="feeling-icon" src={`${getFeeling(post?.feelings)}`} alt="" />{' '}
                      <div>{post?.feelings}</div>
                    </div>
                  )}
                </h5>
                {showIcons && (
                  <div className="post-icons" data-testid="post-icons">
                    <FaPencilAlt className="pencil" />
                    <FaRegTrashAlt className="trash" />
                  </div>
                )}
              </div>

              {post?.createdAt && (
                <p className="time-text-display" data-testid="time-display">
                  {timeAgo.transform(post?.createdAt)} &middot; {getPrivacy(post?.privacy)}
                </p>
              )}
            </div>
            <div className="user-post">
              {post?.post && post?.bgColor === '#ffffff' && (
                <p className="post" data-testid="user-post">
                  {post?.post}
                </p>
              )}
              {post?.post && post?.bgColor !== '#ffffff' && (
                <div
                  data-testid="user-post-with-bg"
                  className="user-post-with-bg"
                  style={{ backgroundColor: `${post?.bgColor}` }}
                >
                  {post?.post}
                </div>
              )}

              {post?.imgId && !post?.gifUrl && post.bgColor === '#ffffff' && (
                <div data-testid="post-image" className="image-display-flex">
                  <img className="post-image" src={`${Utils.getImage(post.imgId, post.imgVersion)}`} alt="" />
                </div>
              )}

              {post?.gifUrl && post.bgColor === '#ffffff' && (
                <div className="image-display-flex">
                  <img className="post-image" src={`${post?.gifUrl}`} alt="" />
                </div>
              )}
              {post?.reactions.length > 0 || post?.commentsCount > 0}
              <PostCommentSection post={post} />
            </div>
          </div>
          {selectedPostId === post?._id && <CommentInputBox post={post} />}
        </div>
      </div>
    </>
  );
};
Post.propTypes = {
  post: PropTypes.object.isRequired,
  showIcons: PropTypes.bool
};
export default Post;
