import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('runtime content view loaded');
  }, []);

  const handleClick = () => {
    console.log('click');
  };
  const handleA11yKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      console.log('keydown');
    }
  };

  return (
    <div
      className="runtime-content-view-text"
      onClick={handleClick}
      onKeyDown={handleA11yKeyDown}
      role="button"
      tabIndex={0}>
      runtime content view
    </div>
  );
}
