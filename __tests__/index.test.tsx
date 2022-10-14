import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Layout from '../components/layouts/primary/PrimaryLayout';

test('layout page renders', async () => {
  // arrange
  const component = <Layout />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // act
  await screen.findByRole('main');

  // assert
  expect(screen.getByRole('main')).toBeInTheDocument();
});
