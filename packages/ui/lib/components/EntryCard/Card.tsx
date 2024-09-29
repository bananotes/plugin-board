import { useEffect, useState, useRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils';
import type { Entry, EntryPosition, EntrySize } from '@apis/models';
import { Button } from '../Button';
import type { DraggableData } from 'react-rnd';
import { Rnd } from 'react-rnd';
import { Content } from './Content';
import { NoteEditor } from './NoteEditor';
import { useStorage } from '@extension/shared';
import { entryDraftStorage, popupSettingsStorage } from '@extension/storage';

export type CardProps = {
  remove: () => void;
  isEditing: boolean;
} & Entry &
  ComponentPropsWithoutRef<'div'>;

const defaultSelfZIndex = 999999;
const defaultSelfBgColor = 'bg-yellow-200/95';
// Random initial position
const initialPosition: EntryPosition = {
  x: Math.round(Math.random() * 100) + 100,
  y: Math.round(Math.random() * 100) + 100,
};

const initialSize: EntrySize = {
  width: Math.round(Math.random() * 30 - 15) + 300,
  height: Math.round(Math.random() * 30 - 15) + 300,
};

export const EntryCard = ({
  remove,
  isEditing,
  id: uuid,
  size,
  position,
  updateTime,
  content,
  author,
  className,
}: CardProps) => {
  const [currentPosition, setCurrentPosition] = useState(position || initialPosition);
  const [currentSize, setCurrentSize] = useState(size || initialSize);
  const [pageHeight, setPageHeight] = useState(0);
  const [isInEditingStatus, setIsInEditingStatus] = useState(isEditing);
  const entryDraft = useStorage(entryDraftStorage);
  const userPreference = useStorage(popupSettingsStorage);
  const [isSelf, setIsSelf] = useState(isInEditingStatus || userPreference.userName === author);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('uuid: ', uuid, isInEditingStatus, size, position, window.scrollX, window.scrollY);
    console.log(JSON.stringify(entryDraft));
    setPageHeight(document.body.scrollHeight);
    if (position) {
      return;
    }
    if (window.scrollY > 0) {
      initialPosition.y += window.scrollY;
    }
    if (window.scrollX > 0) {
      initialPosition.x += window.scrollX;
    }
    setCurrentPosition({ ...initialPosition });
  }, []);
  const handleCancel = () => {
    console.log('handleCancel');
    // TODO: remove draft
    remove();
  };
  const handleSave = () => {
    console.log('handleSave');
    console.log(entryDraft[uuid]);
    chrome.runtime.sendMessage(
      {
        type: 'request',
        method: 'POST',
        url: 'http://bananotes.zeatles.com/entry/',
        data: {
          content: entryDraft[uuid],
          id: uuid,
          position: currentPosition,
          size: currentSize,
          url: encodeURIComponent(window.location.hostname + window.location.pathname),
          author: 'HLiu',
        },
      },
      response => {
        console.log('response', response);
        setIsInEditingStatus(false);
        setIsSelf(true);
      },
    );
  };
  const handleDelete = () => {
    console.log('handleDelete');
  };
  const handleHide = () => {
    console.log('handleHide');
  };
  const [disliked, setDisliked] = useState(false);
  const handleDislike = () => {
    console.log('handleDislike');
    if (disliked) return;
    setDisliked(true);
  };
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    console.log('handleLike');
    if (liked) return;
    setLiked(true);
  };
  return (
    <div
      ref={wrapperRef}
      className="absolute h-full pointer-events-none inset-0"
      style={{ height: pageHeight, zIndex: 99999 }}>
      <Rnd
        className="pointer-events-auto"
        size={{ ...currentSize }}
        position={{ ...currentPosition }}
        maxWidth="400"
        minWidth="200"
        maxHeight="400"
        minHeight="200"
        dragHandleClassName="note-drag-handler"
        bounds="body"
        dragAxis="both"
        enableResizing={
          isInEditingStatus
            ? true
            : {
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }
        }
        disableDragging={!isInEditingStatus}
        onDragStop={(_, data: DraggableData) => {
          console.log('onDragStop', data);
          setCurrentPosition({ x: data.lastX, y: data.lastY });
        }}
        onResizeStop={(_, __, ref, ___, position) => {
          console.log('onResizeStop', ref.offsetWidth, ref.offsetHeight, position);
          setCurrentPosition({ ...position });
          setCurrentSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        }}
        style={{
          zIndex: defaultSelfZIndex,
        }}>
        <div className={cn(className, 'flex flex-col text-black rounded shadow w-full h-full', defaultSelfBgColor)}>
          <div
            className={cn(
              'title note-drag-handler rounded text-right py-1 px-1 bg-yellow-300',
              isInEditingStatus ? 'cursor-move' : '',
            )}>
            {updateTime && <span className="text-xs text-yellow-800">{new Date(updateTime).toLocaleString()}</span>}
            {isInEditingStatus && (
              <>
                <Button className="bg-yellow-600 text-white" onClick={handleCancel} title="Discard your draft (Esc)">
                  Cancel
                </Button>
                <Button className="bg-green-700 text-white" onClick={handleSave} title="Save your note! (Ctrl + Enter)">
                  Save
                </Button>
              </>
            )}
            {!isInEditingStatus && (
              <>
                {isSelf && (
                  <Button className="bg-red-500 text-white" onClick={handleDelete}>
                    Delete
                  </Button>
                )}
                {!isSelf && (
                  <Button className="bg-yellow-800 text-white" onClick={handleHide}>
                    Hide
                  </Button>
                )}
              </>
            )}
          </div>
          <div className="note-body relative flex-grow overflow-y-scroll">
            {!isInEditingStatus && <Content uuid={uuid} content={content} />}
            {isInEditingStatus && <NoteEditor uuid={uuid} content={content} />}
            {!isSelf && (
              <>
                <Button
                  className={cn(
                    'absolute bottom-2 right-10',
                    disliked ? 'bg-gray-200 hover:scale-100 cursor-default' : 'bg-black text-white',
                  )}
                  onClick={handleDislike}>
                  👎
                </Button>
                <Button
                  className={cn(
                    'absolute bottom-2 right-1',
                    liked ? 'bg-gray-200 hover:scale-100 cursor-default' : 'bg-green-500 text-white',
                  )}
                  onClick={handleLike}>
                  👍
                </Button>
              </>
            )}
          </div>
        </div>
      </Rnd>
    </div>
  );
};
