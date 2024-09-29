import { useEffect } from 'react';
import { EntryCard } from '@extension/ui';
import { v4 as uuidV4 } from 'uuid';

const uuid = uuidV4();

export default function App() {
  useEffect(() => {
    // TODO: check if logged in
    console.log('runtime content view loaded', uuid);
  }, []);

  return (
    <div className="new-entry">
      <EntryCard id={uuid} isEditing={true} />
    </div>
  );
}
