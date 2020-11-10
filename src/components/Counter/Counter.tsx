import React from 'react';

interface Props {
  count: number;
  add: () => void;
  remove: () => void;
}

const Counter: React.FC<Props> = ({ count, add, remove }) => {
  const onAdd = () => add();
  const onRemove = () => remove();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Counter;
