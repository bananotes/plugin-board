import { useEffect, useState } from 'react';
import { EntryCard } from '@extension/ui';
import { v4 as uuidV4 } from 'uuid';
import { ROOT_ID } from './Root';

const uuid = uuidV4();

export default function App() {
  useEffect(() => {
    // TODO: check if logged in
    console.log('runtime content view loaded', uuid);
  }, []);
  const [removeCard, setRemoveCard] = useState(false);
  const handleRemoveCard = () => {
    console.log('remove card');
    setRemoveCard(true);
  };
  useEffect(() => {
    if (removeCard) {
      console.log('remove card effect');
      document.getElementById(ROOT_ID)?.remove();
    }
  }, [removeCard]);

  return (
    <div className="new-entry">
      {removeCard ? null : <EntryCard id={uuid} isEditing={true} remove={handleRemoveCard} />}
    </div>
  );
}
