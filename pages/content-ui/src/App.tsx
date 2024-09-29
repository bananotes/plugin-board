import { useEffect } from 'react';
import { useStorage } from '@extension/shared';
import { popupSettingsStorage } from '@extension/storage';

export default function App() {
  const userPreference = useStorage(popupSettingsStorage);
  useEffect(() => {
    console.log('content ui loaded');
  }, []);

  return (
    <div className="flex items-center justify-between gap-2 bg-blue-100 rounded py-1 px-2">
      <div className="flex gap-1 text-blue-500">
        {userPreference.isMultiUser ? 'Multi User' : 'Single User'} / {userPreference.progress}%
      </div>
    </div>
  );
}
