import React, { useState } from 'react';

import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);
  const isLight = theme === 'light';
  const [isMultiUser, setIsMultiUser] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAddClick = () => {
    console.log('Add button clicked');
  };

  const handleSwitchClick = () => {
    console.log('Switch button clicked');
  };

  const handleProgressEnd = () => {
    console.log(progress);
  };

  const handleLoginClick = () => {
    setIsLoggedin(!isLoggedin);
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseInt(event.target.value);
    updateProgress(newProgress);
  };

  const updateProgress = (newProgress: number) => {
    setProgress(Math.min(100, Math.max(0, newProgress)));
  };

  return (
    <div className={`App absolute inset-0 flex flex-col overflow-hidden ${isLight ? 'bg-slate-50' : 'bg-gray-800'}`}>
      <div className="flex justify-between items-center px-4 py-2 bg-[#ffdd79] border-b border-[#ffdd79] h-8">
        <div className="flex items-center space-x-4">
          {' '}
          {/* Increased spacing */}
          <button
            onClick={handleAddClick}
            className="text-[#8b4513] hover:text-[#a0522d] transition-colors text-2xl font-light focus:outline-none">
            +
          </button>
        </div>
        <div className="flex items-center text-sm">
          <span className={`mr-1 ${!isMultiUser ? 'font-bold' : ''} text-[#8b4513]`}>Only</span>
          <label className="relative inline-block w-10 h-6 mx-1">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer"
              checked={isMultiUser}
              onChange={() => setIsMultiUser(!isMultiUser)}
              onClick={handleSwitchClick}
            />
            <span className="absolute cursor-pointer inset-0 bg-[#ffc107] rounded-full before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-transform before:duration-300 before:ease-in-out peer-checked:bg-[#8b4513] peer-checked:before:transform peer-checked:before:translate-x-4"></span>
          </label>
          <span className={`ml-1 ${isMultiUser ? 'font-bold' : ''} text-[#8b4513]`}>All</span>
        </div>
        <div>
          {isLoggedin ? (
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-lg">👮</div>
          ) : (
            <button
              onClick={handleLoginClick}
              className="text-[#8b4513] hover:text-[#a0522d] transition-colors text-sm font-medium tracking-wide focus:outline-none">
              Login
            </button>
          )}
        </div>
      </div>

      {isMultiUser && (
        <div className="flex flex-col items-center px-4 py-2 bg-[#fad76d] border-b border-[#e0b84d]">
          <div className="flex items-center w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              onMouseUp={handleProgressEnd}
              className="w-full h-1 bg-[#ffc107] rounded-full appearance-none outline-none opacity-70 hover:opacity-100 transition-opacity"
            />
            <span className="ml-2 text-xs text-[#8b4513] min-w-[40px] text-right">{progress}%</span>
          </div>
          <div className="mt-1 text-xs text-[#8b4513]">Density</div>
        </div>
      )}

      <div className="flex-grow p-5 bg-[#f0e5c4]">{/* Add your main content here */}</div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
