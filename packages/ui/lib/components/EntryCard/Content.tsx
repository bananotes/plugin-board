import { useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import { cn, escapeUnicode } from '../../utils';
import { type ContentList } from './env';
import { entryDraftStorage } from '@extension/storage';
import { useStorage } from '@extension/shared';

export type ContentProps = {
  content: string;
  uuid: string;
} & ComponentPropsWithoutRef<'div'>;

export function Content({ content, uuid, className, ...props }: ContentProps) {
  const entryDraft = useStorage(entryDraftStorage);
  const [contentList, setContentList] = useState<ContentList>([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);
  const [showParseError, setShowParseError] = useState(false);
  useEffect(() => {
    console.log('content in Content: ', content, uuid);
    if (typeof content === 'undefined') {
      content = entryDraft[uuid];
    }
    content = content.replaceAll('\n', '\\n');
    let rawList = [];
    try {
      rawList = JSON.parse(
        escapeUnicode(content) || `[{"type":"paragraph","children":[{"text":"${escapeUnicode(content)}"}]}]`,
      );
    } catch (e) {
      try {
        rawList = JSON.parse(`[{"type":"paragraph","children":[{"text":"${escapeUnicode(content)}"}]}]`);
      } catch (e) {
        console.error(e);
        setShowParseError(true);
        throw e;
      }
    }
    if (Array.isArray(rawList) && rawList.length > 0) {
      setContentList(rawList);
    }
  }, []);
  return (
    <div className={cn(className, 'py-2 px-2')} {...props}>
      {showParseError && <div className="text-red-600 font-l">Failed to parse content</div>}
      {contentList.map((item, idx) => {
        return (
          <div key={idx} className="mb-10">
            {item.children.map((child, idx) => {
              return (
                <p
                  key={idx}
                  className={cn(
                    child.bold && 'font-bold',
                    child.italic && 'italic',
                    child.code && 'font-mono',
                    child.underline && 'underline',
                    'text-xs',
                  )}>
                  {child.text}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
