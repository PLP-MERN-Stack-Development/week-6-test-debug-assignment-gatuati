import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('renders form and inputs', () => {
  render(<BugForm onBugCreated={() => {}} />);
  expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
});
