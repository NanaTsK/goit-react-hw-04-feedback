import { styled } from 'styled-components';

export const FeedbackList = styled('ul')({
  display: 'flex',
  justifyContent: 'center',

  gap: '15px',
});
export const FeedbackBtn = styled('button')({
  appearance: 'button',
  border: 'transparent',
  borderRadius: '14px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: '700',
  letterSpacing: '.8px',
  lineHeight: '20px',
  padding: '8px 12px',
  textAlign: 'center',
  textTransform: 'uppercase',
  userSelect: 'none',
  transition:
    'background 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.6)',
  },

  'li:nth-child(1) &': {
    backgroundColor: 'rgba(20, 231, 160, 0.2)',
  },
  'li:nth-child(2) &': {
    backgroundColor: 'rgba(243, 243, 116, 0.2)',
  },
  'li:nth-child(3) &': {
    backgroundColor: 'rgba(239, 128, 128, 0.2)',
  },

  'li:nth-child(1) &:hover': {
    backgroundColor: 'rgba(20, 231, 160, 0.6)',
  },
  'li:nth-child(2) &:hover': {
    backgroundColor: 'rgba(243, 243, 116, 0.6)',
  },
  'li:nth-child(3) &:hover': {
    backgroundColor: 'rgba(239, 128, 128, 0.6)',
  },
});
