import React from 'react';

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

const Toasts = ({position}: ToastProps) => {
    return (
        <div>
            Toast notification Position {position}
        </div>
    );
};

export default Toasts;