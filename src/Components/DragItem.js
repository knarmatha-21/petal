import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} className='cardBg'>
            {name}
        </div>
    );
};

export default DragItem;