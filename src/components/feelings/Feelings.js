import { addPostFeeling, toggleFeelingModal } from '@redux/reducers/modal/modal.reducer';
import { feelingsList } from '@services/utils/static.data';
import { useDispatch, useSelector } from 'react-redux';
import '@components/feelings/Feelings.scss';

const Feelings = () => {
  const { feelingIsOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const selectFeeling = (feeling) => {
    dispatch(addPostFeeling({ feeling }));
    dispatch(toggleFeelingModal(!feelingIsOpen));
  };

  return (
    <div className="feelings-container">
      <div className="feelings-container-picker">
        <ul className="feelings-container-picker-list">
          {feelingsList.map((feeling) => (
            <li
              data-testid="feelings-item"
              className="feelings-container-picker-list-item"
              key={feeling.index}
              onClick={() => selectFeeling(feeling)}
            >
              <img src={feeling.image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Feelings;
