import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TwitterShareButton  from '../components/TwitterShareButton' ;
//import MyComponent2 from './TwitterShareButton';

test('TwitterShareButtonが正しくレンダリングされる', () => {
  render(<TwitterShareButton />);
  expect(screen.getByText('Tweet')).toBeInTheDocument();
});
