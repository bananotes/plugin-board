import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type PopupSettings = {
  progress: number;
  isMultiUser: boolean;
};

type PopupSettingsStorage = BaseStorage<PopupSettings> & {
  setProgress: (_: number) => Promise<void>;
  setIsMultiUser: (_: boolean) => Promise<void>;
};

const defaultSettings: PopupSettings = {
  progress: 100,
  isMultiUser: false,
};

const storage = createStorage<PopupSettings>('popup-settings-storage-key', defaultSettings, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

export const popupSettingsStorage: PopupSettingsStorage = {
  ...storage,
  setProgress: async (value: number) => {
    await storage.set(currentSettings => ({
      ...currentSettings,
      progress: value,
    }));
  },
  setIsMultiUser: async (value: boolean) => {
    await storage.set(currentSettings => ({
      ...currentSettings,
      isMultiUser: value,
    }));
  },
};
