import React, { useContext, useEffect } from 'react';
import { AthmButtonStateContext } from '../context';

const renderButton = async (showButton, buttonSettings) => {
  if (showButton) {
    const script_parent = document.getElementById('athm_script_parent');

    while (script_parent.firstChild) {
      script_parent.removeChild(script_parent.firstChild);
    }

    const script = document.createElement('script');
    script.src = 'https://www.athmovil.com/api/js/v2/athmovilV2.js';

    console.log('updating button with state:', buttonSettings);
    window.ATHM_Checkout = { ...buttonSettings };

    script_parent.appendChild(script);

    return <div id="ATHMovil_Checkout_Button"></div>;
  }

  return null;
};

const AthmButton = () => {
  const { state } = useContext(AthmButtonStateContext);

  const { showButton, buttonSettings } = state;

  let buttonNode = null;

  useEffect(() => {
    const getButton = async () => {
      buttonNode = await renderButton(showButton, buttonSettings);
    };

    getButton();
  }, [showButton, state]);

  return (
    <div className="px-4 text-center sm:px-0">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Generated button</h3>
      <div className="mt-4">{buttonNode}</div>
    </div>
  );
};

export default AthmButton;
