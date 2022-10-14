import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import CommunityPrograms from '../pages/communityprograms';

test('CommunityPrograms page renders', async () => {
  // arrange
  const page = <CommunityPrograms />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(page));

  // act
  await screen.findByTestId('programs-page');

  // assert
  expect(screen.getByTestId('programs-page')).toBeInTheDocument();
});
