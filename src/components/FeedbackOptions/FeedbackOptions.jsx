import styles from './styles.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.btn_container}>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className={styles.btn}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
