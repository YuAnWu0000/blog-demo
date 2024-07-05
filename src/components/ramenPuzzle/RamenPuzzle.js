import { useState, useEffect } from 'react'
import styles from './index.module.scss'

const WORD1 = ['s', 'c', 'r', 'u', 'm', 'p', 't', 'i', 'o', 'u', 's']
const WORD2 = ['t', 'a', 's', 't', 'y']
const WORD3 = ['y', 'u', 'm', 'm', 'y']
const WORD4 = ['d', 'e', 'l', 'i', 'c', 'i', 'o', 'u', 's']
const WORD5 = ['a', 'p', 'p', 'e', 't', 'i', 'z', 'i', 'n', 'g']
function RamenPuzzle() {
  function getClass(isPivot) {
    // return isNewClass
    //   ? `w-12 h-12 border border-green-400 text-[2rem] font-medium text-center
    //           leading-[3rem] m-2 relative right-1/2 last:mr-auto transition-all ${
    //             isPivot
    //               ? 'bg-green-400 text-green-50 left-1/2 [&~div]:left-1/2 order-1 [&~div]:order-1'
    //               : 'bg-white text-green-500 order-2'
    //           }`
    //   : `w-12 h-12 border border-green-400 text-[2rem] font-medium text-center
    //           leading-[3rem] m-2 relative right-1/2 last:mr-auto transition-all ${
    //             isPivot
    //               ? 'bg-green-400 text-green-50'
    //               : 'bg-white text-green-500'
    //           }`
    return `w-12 h-12 border border-green-400 text-[2rem] font-medium text-center
              leading-[3rem] m-2 relative right-1/2 last:mr-auto ${
                isPivot
                  ? 'bg-green-400 text-green-50 animate-translateX'
                  : 'bg-white text-green-500 animate-translateX'
              }`
  }
  return (
    <div className="flex justify-center">
      <div className="w-fit relative">
        <div className="w-full flex items-center relative">
          {WORD1.map((char, index) => (
            <div
              key={`WORD1${index}`}
              className={getClass(char === 'r')}
              style={{
                transform: 'translateX(600px)',
                '--translateX': '450px'
              }}
            >
              {char}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {WORD2.map((char, index) => (
            <div
              key={`WORD2${index}`}
              className={getClass(char === 'a')}
              style={{ '--translateX': '514px' }}
            >
              {char}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {WORD3.map((char, index) => (
            <div
              key={`WORD3${index}`}
              className={getClass(index === 2)}
              style={{
                transform: 'translateX(600px)',
                '--translateX': '450px'
              }}
            >
              {char}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {WORD4.map((char, index) => (
            <div
              key={`WORD4${index}`}
              className={getClass(char === 'e')}
              style={{
                '--translateX': '514px'
              }}
            >
              {char}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {WORD5.map((char, index) => (
            <div
              key={`WORD5${index}`}
              className={getClass(char === 'n')}
              style={{
                transform: 'translateX(600px)',
                '--translateX': '66px'
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default RamenPuzzle
