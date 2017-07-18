import * as React from 'react';

const ColorMap: React.SFC = () => {
  return (
    <div className="color-map">
      <div style={{backgroundColor: '#dbdb8d'}}>
        1️⃣ Action
      </div>
      <div style={{backgroundColor: '#f7b6d2'}}>
        2️⃣ Ingredient
      </div>
      <div>
        3️⃣ Nothing
      </div>
    </div>
  );
};

export default ColorMap;