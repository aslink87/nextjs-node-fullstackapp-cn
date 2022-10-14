import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import About from '../pages/about';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

test('about page renders', async () => {
  // arrange
  const page = <About />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(page));

  // act
  await screen.findByTestId('about-page');

  // assert
  expect(screen.getByTestId('about-page')).toBeInTheDocument();
});
