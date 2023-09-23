import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((option, btnId) => {
        return (
          <li key={btnId}>
            <FeedbackBtn onClick={e => onLeaveFeedback(e, option)}>
              {option}
            </FeedbackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};
