import React, { useState } from 'react';
import './App.css';
import Light from './Light';

/**
 * Appコンポーネント - 信号機のメインコンポーネント
 * @returns {JSX.Element} 信号機の表示要素
 */
function App() {
  // 現在アクティブなランプの状態
  const [activeLight, setActiveLight] = useState(null);

// ランプのクリック時の処理
  const handleLightClick = (light) => {
    setActiveLight(light);
  };

  return (
    <div className="traffic-light">
      {/* 赤ランプ */}
      <Light
        color="#ff6b6b"
        isActive={activeLight === 'red'}
        onClick={() => handleLightClick('red')}
      />
      {/* 黄ランプ */}
      <Light
        color="#f5d76e"
        isActive={activeLight === 'yellow'}
        onClick={() => handleLightClick('yellow')}
      />
      {/* 青ランプ */}
      <Light
        color="#4a90e2"
        isActive={activeLight === 'blue'}
        onClick={() => handleLightClick('blue')}
      />
    </div>
  );
}

export default App;