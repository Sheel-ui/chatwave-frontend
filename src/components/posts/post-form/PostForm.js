import Avatar from '@components/avatar/Avatar';
import Input from '@components/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import '@components/posts/post-form/PostForm.scss';
import { openModal, toggleFeelingModal, toggleGifModal, toggleImageModal } from '@redux/reducers/modal/modal.reducer';
import AddPost from '@components/posts/post-modal/post-add/AddPost';
import { useRef, useState } from 'react';
import { ImageUtils } from '@services/utils/image-utils.service';
import { FaImage, FaRegSmile } from 'react-icons/fa';
import { MdGif } from 'react-icons/md';
import EditPost from '@components/posts/post-modal/post-edit/EditPost';

const PostForm = () => {
  const { profile } = useSelector((state) => state.user);
  const { type, isOpen, openFileDialog, gifModalIsOpen, feelingsIsOpen } = useSelector((state) => state.modal);
  const [selectedPostImage, setSelectedPostImage] = useState();
  const fileInputRef = useRef();
  const dispatch = useDispatch();

  const openPostModal = () => {
    dispatch(openModal({ type: 'add' }));
  };

  const openImageModal = () => {
    fileInputRef.current.click();
    dispatch(openModal({ type: 'add' }));
    dispatch(toggleImageModal(!openFileDialog));
  };

  const openGifModal = () => {
    dispatch(openModal({ type: 'add' }));
    dispatch(toggleGifModal(!gifModalIsOpen));
  };

  const openFeelingsComponent = () => {
    dispatch(openModal({ type: 'add' }));
    dispatch(toggleFeelingModal(!feelingsIsOpen));
  };

  const handleFileChange = (event) => {
    ImageUtils.addFileToRedux(event, '', setSelectedPostImage, dispatch);
  };

  return (
    <>
      <div className="post-form" data-testid="post-form">
        <div className="post-form-row">
          <div className="post-form-header">
            <h4 className="post-form-title">Create Post</h4>
          </div>
          <div className="post-form-body">
            <div className="post-form-input-body" data-testid="input-body" onClick={() => openPostModal()}>
              <Avatar
                name={profile?.username}
                bgColor={profile?.avatarColor}
                textColor="#ffffff"
                size={40}
                avatarSrc={profile?.profilePicture}
              />
              <div className="post-form-input" data-placeholder="Write something here..."></div>
            </div>
            <ul className="post-form-list" data-testid="list-item">
              <li className="post-form-list-item image-select" onClick={() => openImageModal()}>
                <Input
                  name="image"
                  ref={fileInputRef}
                  type="file"
                  className="file-input"
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.value = null;
                    }
                  }}
                  handleChange={handleFileChange}
                />
                <FaImage />
              </li>
              <li className="post-form-list-item" onClick={() => openGifModal()}>
                <MdGif style={{ fontSize: '2rem' }} />
              </li>
              <li className="post-form-list-item" onClick={() => openFeelingsComponent()}>
                <FaRegSmile />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && type === 'add' && <AddPost selectedImage={selectedPostImage} />}
      {isOpen && type === 'edit' && <EditPost />}
    </>
  );
};
export default PostForm;
