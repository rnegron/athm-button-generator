import React, { useReducer } from 'react';
import { AthmButtonStateContext, AthmButtonDispatchContext } from './context';
import reducer, { initialButtonState } from './reducer';
import { Form, Navbar, AthmButton } from './components';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    showButton: false,
    buttonState: initialButtonState,
  });

  return (
    <AthmButtonDispatchContext.Provider value={{ dispatch }}>
      <AthmButtonStateContext.Provider value={{ state }}>
        <div>
          <div className="mb-20">
            <Navbar />
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <Form />
              </div>
              <div className="md:col-span-1">
                <AthmButton />
              </div>
            </div>
          </div>
        </div>
      </AthmButtonStateContext.Provider>
    </AthmButtonDispatchContext.Provider>
  );
}

export default App;
