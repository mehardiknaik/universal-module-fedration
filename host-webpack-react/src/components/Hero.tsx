import React, { useEffect } from 'react';

const Hero = () => {
  const [number, setNumber] = React.useState(null);
  useEffect(() => {
    const eventHandler = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Build event received:', customEvent.detail);
      setNumber(customEvent.detail || 0);
    };
    document.addEventListener('build', eventHandler);
    return () => {
      document.removeEventListener('build', eventHandler);
    };
  }, []);
  return (
    <div>
      <h1>This Is Webpack Host</h1>
      <p>Counter value Remote {number} </p>
    </div>
  );
};

export default Hero;
