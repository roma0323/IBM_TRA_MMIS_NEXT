import React from 'react';

type SlideNavigationProps = {
  direction: 'left' | 'right';
  onHover: (direction: 'left' | 'right') => void;
  isVisible: boolean;
};

const SlideNavigation: React.FC<SlideNavigationProps> = ({ direction, onHover, isVisible }) => {
  if (!isVisible) return null; // Don't render anything if not visible

  return (
    <div
      onMouseEnter={() => onHover(direction)}
      className={`absolute top-0 ${
        direction === 'left' ? 'left-0' : 'right-0'
      } h-full w-[3vw] bg-gradient-to-${direction === 'left' ? 'r' : 'l'} from-slate-${
        direction === 'left' ? '300' : '200'
      } to-transparent cursor-pointer flex items-center justify-center text-[#397EFF] text-3xl`}
    >
      {direction === 'left' ? '<' : '>'}
    </div>
  );
};

export default SlideNavigation;
