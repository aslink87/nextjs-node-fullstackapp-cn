import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import AboutTop from './AboutTop';

test('abouttop component renders', async () => {
  // arrange
  const component = <AboutTop />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // act
  await screen.findByTestId('abouttop-component');

  // assert
  expect(screen.getByTestId('abouttop-component')).toBeInTheDocument();
});
