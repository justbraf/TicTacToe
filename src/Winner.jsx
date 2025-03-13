let Winner = ({ resetGame, player, winner, squashed }) => {
    return (
            <div className="flex flex-col justify-center items-center bg-white/90 absolute min-w-xl w-screen h-screen min-h-full gap-8">
            {winner ? <h1 h1 className="text-6xl" > Winner {player}</h1>:squashed ? <h1 className="text-6xl">Squashed</h1> : <span></span>}
                <button onClick={resetGame} className="bg-blue-500 rounded-full p-3 text-white cursor-pointer">Reset Game</button>
            </div>
    )
}

export { Winner }