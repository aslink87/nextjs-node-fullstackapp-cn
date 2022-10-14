import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Assistance from '../pages/assistance';

test('assistance page renders', async () => {
  // arrange
  const page = <Assistance />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(page));

  // act
  await screen.findByTestId('assistance-page');

  // assert
  expect(screen.getByTestId('assistance-page')).toBeInTheDocument();
});
