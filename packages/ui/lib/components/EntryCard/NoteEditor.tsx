import { type ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { cn } from '../../utils';
import { type CustomText } from './env';
import { entryDraftStorage } from '@extension/storage';

export type NoteEditorProps = {
  content: string;
  uuid: string;
} & ComponentPropsWithoutRef<'div'>;

export function NoteEditor({ content, uuid, className }: NoteEditorProps) {
  const [showParseError, setShowParseError] = useState(false);
  const [editableText, setEditableText] = useState('');
  useEffect(() => {
    let rawList = [];
    try {
      rawList = JSON.parse(content || '[]');
    } catch (e) {
      try {
        rawList = JSON.parse(`[{"type":"paragraph","children":[{"text":"${content}"}]}]`);
      } catch (e) {
        console.error(e);
        setShowParseError(true);
        throw e;
      }
    }
    console.log('rawList: ', JSON.stringify(rawList));
    if (Array.isArray(rawList) && rawList.length > 0) {
      const text = rawList.reduce((prev, curr) => {
        if (curr.type === 'paragraph') {
          return prev + curr.children.map((child: CustomText) => child.text).join('') + '\n\r';
        }
        return prev;
      }, '');
      setEditableText(text);
    }
    console.log('editableText: ', editableText);
  }, []);
  return (
    <div className={cn('py-2 px-2 h-full text-xs rounded ', className)}>
      {showParseError ? (
        <div className="text-red-600 font-l">Failed to parse content</div>
      ) : (
        <div
          className="h-full w-full cursor-text outline-none"
          contentEditable="plaintext-only"
          onInput={e => {
            console.log('Text inside div', e.currentTarget.textContent);
            entryDraftStorage.saveDraft({ id: uuid, textContent: e.currentTarget.textContent || '' });
          }}>
          {editableText}
        </div>
      )}
    </div>
  );
}
