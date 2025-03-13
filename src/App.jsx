import { useState } from 'react'
// We are using Tailwind CSS, so its unlikely you'll be using a CSS file
// import './App.css'
import { Square } from './Square'
import { Winner } from './Winner'

const CROSS = "CROSS"
const CIRCLE = "CIRCLE"
const EMPTY = "EMPTY"

function App() {
  const [game, setGame] = useState({
    player: CROSS,
    position: [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY
    ],
    winner: false,
    squash: false
  })

  let takeTurn = (squarePosition) => {
    let positions = [...game.position]
    positions[squarePosition] = game.player
    setGame({
      player: game.player === CROSS ? CIRCLE : CROSS,
      position: positions,
      winner: checkWinner(positions),
      squash: checkSquash(positions)
    })
  }

  let checkWinner = (myGrid) => {
    // check for horizontal winner
    for (let offset = 0; offset < 9; offset += 3) {
      if (myGrid[0 + offset] == myGrid[1 + offset] && myGrid[1 + offset] == myGrid[2 + offset]) {
        if (myGrid[0 + offset] == EMPTY)
          return false
        return true
      }
    }
    // check for vertical winner
    for (let offset = 0; offset < 9; offset++) {
      if (myGrid[0 + offset] == myGrid[3 + offset] && myGrid[3 + offset] == myGrid[6 + offset]) {
        if (myGrid[0 + offset] == EMPTY)
          return false
        return true
      }
    }
    // check for diagonal winner
    for (let offset = 0; offset < 3; offset += 2) {
      if (myGrid[0 + offset] == myGrid[4] && myGrid[4] == myGrid[8 - offset]) {
        if (myGrid[0 + offset] == EMPTY)
          return false
        return true
      }
    }
    return false
  }

  let checkSquash = (myGrid) => {
    // if no EMPTY positions are found then game is squashed
    if (!myGrid.includes(EMPTY))
      return true
    return false
  }

  const resetGame = () => {
    // reset game by resetting all states to inital values
    setGame({
      player: CROSS,
      position: [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
      ],
      winner: false,
      squash: false
    })
  }

  return (
    <div className='flex flex-col h-screen items-center jusitfy-center min-w-xl min-h-full gap-12'>
      <h1 className="text-8xl text-sky-600">Tic Tac Toe</h1>
      <div className="bkgnd bg-stone-500 w-max my-8 grid grid-cols-3 gap-1">
        <Square position={0} value={game.position[0]} take_turn={takeTurn} />
        <Square position={1} value={game.position[1]} take_turn={takeTurn} />
        <Square position={2} value={game.position[2]} take_turn={takeTurn} />
        <Square position={3} value={game.position[3]} take_turn={takeTurn} />
        <Square position={4} value={game.position[4]} take_turn={takeTurn} />
        <Square position={5} value={game.position[5]} take_turn={takeTurn} />
        <Square position={6} value={game.position[6]} take_turn={takeTurn} />
        <Square position={7} value={game.position[7]} take_turn={takeTurn} />
        <Square position={8} value={game.position[8]} take_turn={takeTurn} />
      </div>
      {(game.winner || game.squash) && <Winner resetGame={resetGame} player={game.player == CROSS ? CIRCLE : CROSS} winner={game.winner} squashed={game.squash} />}
      {!game.winner && !game.squash && <p className='text-2xl'>Player Turn: {game.player == CROSS ? CROSS : CIRCLE}</p>}
    </div>
  )
}

export default App
