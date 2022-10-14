import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Faq from '../pages/faq';

test('Faq page renders', async () => {
  // arrange
  const page = <Faq />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(page));

  // act
  await screen.findByTestId('faq-page');

  // assert
  expect(screen.getByTestId('faq-page')).toBeInTheDocument();
});
