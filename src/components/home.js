import React, { useState } from 'react';
import Main from './main';
import ChooseInput from './chooseInput';
import GameBoard from './gameBoard';

const Home = () => {
    const [mostrar, setMostrar] = useState(false);

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player1Weapon, setPlayer1Weapon] = useState("");
    const [player2Weapon, setPlayer2Weapon] = useState("");

    const desginarP1 = (e) => {
        setPlayer1Weapon(e.target.id);
        setPlayer2Weapon(player1Weapon === " x" ? e.target.id : " o");
        setMostrar(true)
    }

    const desginarP2 = (e) => {
        setPlayer1Weapon(e.target.id);
        setPlayer2Weapon(player1Weapon === " o" ? e.target.id : " x");
        setMostrar(true)
    }

    const playerHandler1 = (e) => {
        setPlayer1(e.target.value)
    }
    const playerHandler2 = (e) => {
        setPlayer2(e.target.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1 className="pl-3 text-center" style={{ fontSize: "2rem" }}>TicTacToe in React.js</h1>
                </div>
            </div>
            <Main >
                <ChooseInput mostrar={mostrar} playerHandler1={playerHandler1} playerHandler2={playerHandler2} desginarP1={desginarP1} desginarP2={desginarP2} />
                <GameBoard mostrar={mostrar} player1={player1} player2={player2} player1Weapon={player1Weapon} player2Weapon={player2Weapon} />

            </Main>
        </>
    )
};

export default Home;