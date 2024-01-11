export const mockAuth = async (email, password) => {
  if (email === 'xyz@gmail.com' && password === '123456') {
    return { success: true, token: 'mock_token' };
  } else {
    return { success: false, error: 'Incorrect Email/Password' };
  }
};