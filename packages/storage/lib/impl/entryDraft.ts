import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type DraftStore = {
  [key: string]: string;
};
type Draft = {
  id: string;
  textContent: string;
};

type EntryDraftStorage = BaseStorage<DraftStore> & {
  saveDraft: (_: Draft) => Promise<void>;
};

const storage = createStorage<DraftStore>(
  'current-entry-draft-storage-key',
  {},
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const entryDraftStorage: EntryDraftStorage = {
  ...storage,
  saveDraft: async ({ id, textContent }: Draft) => {
    await storage.set(currentSettings => ({
      ...currentSettings,
      [id]: textContent,
    }));
  },
};
