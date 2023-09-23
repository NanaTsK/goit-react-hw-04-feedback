import {
  StatsList,
  StatsTextGood,
  StatsTextNeutral,
  StatsTextBad,
  StatsTextPositive,
  StatsTextTotal,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsList>
      <li>
        <StatsTextGood>Good: {good}</StatsTextGood>
      </li>
      <li>
        <StatsTextNeutral>Neutral: {neutral}</StatsTextNeutral>
      </li>
      <li>
        <StatsTextBad>Bad: {bad}</StatsTextBad>
      </li>
      <li>
        <StatsTextTotal>Total: {total}</StatsTextTotal>
      </li>
      <li>
        <StatsTextPositive>
          Positive feedback: {positivePercentage}%
        </StatsTextPositive>
      </li>
    </StatsList>
  );
};
