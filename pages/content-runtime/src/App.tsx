import { useEffect } from 'react';
import { EntryCard } from '@extension/ui';
import { v4 as uuidV4 } from 'uuid';

const uuid = uuidV4();

export default function App() {
  useEffect(() => {
    console.log('runtime content view loaded', uuid);
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
      <EntryCard id={uuid}>1234</EntryCard>
    </div>
  );
}
