import React, { useState } from 'react';

export default function SnakesAndLadders() {
  const [playerPos, setPlayerPos] = useState(1);
  const [diceValue, setDiceValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [message, setMessage] = useState('Roll the dice to start!');

  const snakes = {
    98: 78,
    95: 56,
    88: 24,
    62: 18,
    48: 26,
    36: 6,
    32: 10
  };

  const ladders = {
    4: 25,
    13: 46,
    33: 49,
    42: 63,
    50: 69,
    62: 81,
    74: 92
  };

  const rollDice = () => {
    if (gameWon || isRolling) return;
    
    setIsRolling(true);
    setMessage('Rolling...');
    
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setDiceValue(roll);
      
      let newPos = playerPos + roll;
      
      if (newPos > 100) {
        setMessage(`Rolled ${roll}! Need exact number to win.`);
        setIsRolling(false);
        return;
      }
      
      if (newPos === 100) {
        setPlayerPos(100);
        setGameWon(true);
        setMessage(`🎉 YOU WON! Rolled ${roll}! 🎉`);
        setIsRolling(false);
        return;
      }
      
      setPlayerPos(newPos);
      
      setTimeout(() => {
        if (ladders[newPos]) {
          const climbTo = ladders[newPos];
          setPlayerPos(climbTo);
          setMessage(`Rolled ${roll}! 🪜 Ladder from ${newPos} to ${climbTo}!`);
          setIsRolling(false);
        } else if (snakes[newPos]) {
          const slideTo = snakes[newPos];
          setPlayerPos(slideTo);
          setMessage(`Rolled ${roll}! 🐍 Snake from ${newPos} to ${slideTo}!`);
          setIsRolling(false);
        } else {
          setMessage(`Rolled ${roll}! Moved to ${newPos}`);
          setIsRolling(false);
        }
      }, 500);
      
    }, 600);
  };

  const resetGame = () => {
    setPlayerPos(1);
    setDiceValue(null);
    setGameWon(false);
    setIsRolling(false);
    setMessage('Roll the dice to start!');
  };

  const renderBoard = () => {
    const cells = [];
    let cellNum = 100;
    
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const isPlayer = cellNum === playerPos;
        const hasLadder = ladders[cellNum];
        const hasSnake = snakes[cellNum];
        
        cells.push(
          <div
            key={cellNum}
            className={`w-14 h-14 border-2 border-gray-300 flex items-center justify-center text-sm font-bold relative transition-all duration-300
              ${isPlayer ? 'bg-blue-500 text-white scale-110 z-10 shadow-lg rounded' : 'bg-white'}
              ${hasLadder ? 'bg-green-200' : ''}
              ${hasSnake ? 'bg-red-200' : ''}
            `}
          >
            <span className="text-xs absolute top-0.5 left-1">{cellNum}</span>
            {hasLadder && <span className="absolute top-0 right-1 text-xs">🪜</span>}
            {hasSnake && <span className="absolute top-0 right-1 text-xs">🐍</span>}
            {isPlayer && <span className="text-2xl">🎮</span>}
          </div>
        );
        
        if (row % 2 === 0) {
          cellNum--;
        } else {
          cellNum++;
        }
      }
      
      if (row % 2 === 0) {
        cellNum -= 9;
      } else {
        cellNum -= 11;
      }
    }
    
    return cells;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-400 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-3xl">
        <h1 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🐍 Snakes & Ladders 🪜
        </h1>
        <p className="text-center text-xl text-purple-700 font-semibold mb-6">{message}</p>
        
        <div className="grid grid-cols-10 gap-1 mb-8 bg-gray-200 p-2 rounded-lg">
          {renderBoard()}
        </div>
        
        <div className="flex gap-6 items-center justify-center mb-6">
          {diceValue && (
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-6xl font-bold text-white">{diceValue}</span>
            </div>
          )}
          
          <button
            onClick={rollDice}
            disabled={gameWon || isRolling}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed text-lg"
          >
            {isRolling ? '🎲 Rolling...' : '🎲 Roll Dice'}
          </button>
          
          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 text-lg"
          >
            🔄 New Game
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3 text-center text-purple-700">📖 How to Play</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎲</span>
              <span>Roll dice to move</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪜</span>
              <span>Green = Ladder up!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐍</span>
              <span>Red = Snake down!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>Reach 100 to win!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}