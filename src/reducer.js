export const initialState = {
  env: 'production',
  publicToken: null,
  timeout: 600,
  theme: 'btn',
  lang: 'en',
  total: null,
  tax: null,
  subtotal: null,
  metadata1: null,
  metadata2: null,
  items: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return { ...state };
    case 'RESET_FORM':
      return { ...initialState };
    default:
      throw new Error();
  }
}
