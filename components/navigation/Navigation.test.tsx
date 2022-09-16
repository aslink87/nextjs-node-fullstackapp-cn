import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Navigation from './Navigation';

test('layout page renders', async () => {
  // arrange
  const component = <Navigation />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // act
  await screen.findByTestId('nav');

  // assert
  expect(screen.getByTestId('nav')).toBeInTheDocument();
});
