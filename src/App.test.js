import { render, screen } from '@testing-library/react';
import {Login} from "./components/Login";


//test case to check whether login has rendered or not
test('user login', () => {
  render(<Login />);
  const user = screen.getByText(/Username/i);
  const pass = screen.getByText(/Password/i);
  expect(user).toBeInTheDocument();
  expect(pass).toBeInTheDocument();
});
