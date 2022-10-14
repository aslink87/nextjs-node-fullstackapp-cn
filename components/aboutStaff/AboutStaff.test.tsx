import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import AboutStaff from './AboutStaff';

test('aboutstaff component renders', async () => {
  // arrange
  const component = <AboutStaff />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // act
  await screen.findByTestId('aboutstaff-component');

  // assert
  expect(screen.getByTestId('aboutstaff-component')).toBeInTheDocument();
});
