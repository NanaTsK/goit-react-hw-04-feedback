import { styled } from 'styled-components';

export const StatsList = styled('ul')({
  //   xxxxx
});

export const StatsTextGood = styled('p')({
  color: 'rgb(20, 231, 160)',
  textShadow: '1px 1px 0 whitesmoke',
});

export const StatsTextNeutral = styled('p')({
  color: 'rgb(243, 243, 116)',
  textShadow: '1px 1px 0 whitesmoke',
});

export const StatsTextBad = styled('p')({
  color: 'rgb(239, 128, 128)',
  textShadow: '1px 1px 0 whitesmoke',
});

export const StatsTextTotal = styled('p')({
  textShadow: '1px 1px 0 rgba(20, 231, 160, 0.4)',
});

export const StatsTextPositive = styled('p')({
  textShadow: '1px 1px 0 rgb(20, 231, 160)',
});
