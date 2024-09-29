import { useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils';
import { type ContentList } from './env';

export type ContentProps = {
  content: string;
} & ComponentPropsWithoutRef<'div'>;

export function Content({ content, className, ...props }: ContentProps) {
  const [contentList, setContentList] = useState<ContentList>([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);
  const [showParseError, setShowParseError] = useState(false);
  useEffect(() => {
    let rawList = [];
    try {
      rawList = JSON.parse(content || '[]');
    } catch (e) {
      console.error(e);
      setShowParseError(true);
      throw e;
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
