import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import AboutC from './AboutC';

test('aboutC component renders', async () => {
  // arrange
  const component = <AboutC />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // act
  await screen.findByTestId('aboutc-component');

  // assert
  expect(screen.getByTestId('aboutc-component')).toBeInTheDocument();
});
