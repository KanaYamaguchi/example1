import React from 'react';

/**
 * Lightコンポーネント - 各信号ランプを表現
 * @param props.color - ランプのアクティブ時の色
 * @param props.isActive - ランプがアクティブかどうかのフラグ
 * @param props.onClick - クリック時のイベントハンドラー
 */
const Light = ({ color, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: isActive ? color : '#e0e0e0',
        margin: '10px',
        cursor: 'pointer',
        transition: 'transform 0.1s ease',
        transform: isActive ? 'scale(0.95)' : 'scale(1)'
      }}
    ></div>
  );
};

export default Light;