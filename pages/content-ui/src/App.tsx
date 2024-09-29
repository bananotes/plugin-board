import { useEffect, useState } from 'react';
import { useStorage } from '@extension/shared';
import { popupSettingsStorage } from '@extension/storage';
import { EntryCard } from '@extension/ui';
import type { Entry } from '@extension/apis/models';

export default function App() {
  const userPreference = useStorage(popupSettingsStorage);
  const [entryList, setEntryList] = useState([]);
  const getEntries = () => {
    chrome.runtime.sendMessage(
      {
        type: 'request',
        method: 'GET',
        url: `http://bananotes.zeatles.com/entry?${userPreference.isMultiUser ? '' : 'author=' + userPreference.userName}`,
      },
      response => {
        console.log('response', response);
        setEntryList(
          response.filter(
            (entry: Entry) => entry.url === encodeURIComponent(window.location.hostname + window.location.pathname),
          ),
        );
      },
    );
  };
  useEffect(() => {
    console.log('content ui loaded');
    getEntries();
  }, [userPreference.isMultiUser, userPreference.progress, userPreference.userName]);

  return (
    <div>
      {entryList.map(({ ...entry }: Entry) => (
        <EntryCard key={entry.id} {...entry} />
      ))}
    </div>
  );
}
