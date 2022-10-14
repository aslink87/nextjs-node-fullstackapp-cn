import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Support from '../pages/support';

test('Support page renders', async () => {
  // arrange
  const page = <Support />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(page));

  // act
  await screen.findByTestId('support-page');

  // assert
  expect(screen.getByTestId('support-page')).toBeInTheDocument();
});
