import { useEffect, useState, useRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils';
import type { Entry, EntryPosition, EntrySize } from '@apis/models';
import { Button } from '../Button';
import type { DraggableData } from 'react-rnd';
import { Rnd } from 'react-rnd';

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

export const EntryCard = ({ remove, isEditing, id: uuid, size, position, updateTime, className }: CardProps) => {
  const [currentPosition, setCurrentPosition] = useState(position || initialPosition);
  const [currentSize, setCurrentSize] = useState(size || initialSize);
  const [pageHeight, setPageHeight] = useState(0);
  // const [isSelf, setIsSelf] = useState(true);
  const isSelf = true;
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('uuid: ', uuid, isEditing, size, position, window.scrollX, window.scrollY);
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
  };
  const handleDelete = () => {
    console.log('handleDelete');
  };
  const handleHide = () => {
    console.log('handleHide');
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
        maxHeight="400"
        dragHandleClassName="note-drag-handler"
        bounds="body"
        dragAxis="both"
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
          <div className="title note-drag-handler text-right py-1 px-1 bg-yellow-300 cursor-move">
            {updateTime && (
              <span className="text-xs text-yellow-800">
                {new Date(updateTime - new Date().getTimezoneOffset() * 60 * 1000).toLocaleString()}
              </span>
            )}
            {isEditing && (
              <>
                <Button className="bg-yellow-600 text-white" onClick={handleCancel}>
                  Cancel (Esc)
                </Button>
                <Button className="bg-green-700 text-white" onClick={handleSave}>
                  Save (Ctrl + Enter)
                </Button>
              </>
            )}
            {!isEditing && (
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
          <div className="note-body relative bg-red-500 flex-grow overflow-y-scroll"></div>
        </div>
      </Rnd>
    </div>
  );
};
