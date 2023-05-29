import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import { addElement, removeElement } from './store/squaresSlice';

const App = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  const handleAdd = () => {
    const newElement = {
      id: Date.now(),
      color: getRandomColor(),
    };
    dispatch(addElement(newElement));
  };

  const handleRemove = () => {
    if (list.length > 0) {
      dispatch(removeElement());
    }
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const transitions = useTransition(list, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });

  return (
    <div>
      <button onClick={handleAdd}>Добавить</button>
      <button onClick={handleRemove}>Удалить</button>
      <div style={{ display: 'flex' }}>
        {transitions((style, item) => (
          <animated.div
            key={item.id}
            style={{
              ...style,
              width: '20%',
              height: '100px',
              backgroundColor: item.color,
              margin: '0 10px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
