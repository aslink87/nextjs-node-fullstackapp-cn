import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import AboutGrid from './AboutGrid';

test('aboutgrid component renders', async () => {
  // arrange
  const component = <AboutGrid />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // act
  await screen.findByTestId('aboutgrid-component');

  // assert
  expect(screen.getByTestId('aboutgrid-component')).toBeInTheDocument();
});
