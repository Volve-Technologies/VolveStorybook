import * as React from 'react';

// Minimal stub — breadcrumb.tsx only needs HeaderButton
export const HeaderButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & { nativeButton?: boolean; render?: React.ReactElement }
>(({ children, render, nativeButton: _nativeButton, ...props }, ref) => {
  if (render) {
    return React.cloneElement(render, { ref, ...props, children });
  }
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});
HeaderButton.displayName = 'HeaderButton';
