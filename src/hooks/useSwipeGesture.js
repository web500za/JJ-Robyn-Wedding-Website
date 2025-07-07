import { useState, useRef, useEffect } from 'react';

export function useSwipeGesture(onSwipeLeft, onSwipeRight, threshold = 50) {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchMove = (e) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart.x || !touchEnd.x) return;
    
    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > threshold;
    const isRightSwipe = distanceX < -threshold;
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    // Only trigger horizontal swipes
    if (!isVerticalSwipe) {
      if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft();
      }
      if (isRightSwipe && onSwipeRight) {
        onSwipeRight();
      }
    }

    // Reset
    setTouchStart({ x: 0, y: 0 });
    setTouchEnd({ x: 0, y: 0 });
  };

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchmove', handleTouchMove, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  return elementRef;
}