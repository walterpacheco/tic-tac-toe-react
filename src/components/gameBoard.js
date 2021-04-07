
import React, { useState } from 'react';
import '../asest/index.css';
function creadorMatriz() {
    let matriz = []
    for (let i = 0; i < 3; i++) {
        let a = []
        for (let j = 0; j < 3; j++) {
            a.push(0)
        }
        matriz.push(a)
    }
    return matriz
};

let matrizGame = creadorMatriz()


const GameBoard = (props) => {
    const [board, setBoard] = useState(matrizGame);
    const [playerActive, setPlayerActive] = useState(true);
    const [winner, setWinner] = useState("");
    const [gameActive, setGameActive] = useState(true);

    const jugadas = (e) => {
        if (gameActive) {
            if (e.target.id === "position1") {
                let aux = [...board];
                playerActive ? aux[0][0] = 1 : aux[0][0] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive)
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;

            }
            if (e.target.id === "position2") {
                let aux = [...board];
                playerActive ? aux[0][1] = 1 : aux[0][1] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
            if (e.target.id === "position3") {
                let aux = [...board];
                playerActive ? aux[0][2] = 1 : aux[0][2] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
            if (e.target.id === "position4") {
                let aux = [...board];
                playerActive ? aux[1][0] = 1 : aux[1][0] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
            if (e.target.id === "position5") {
                let aux = [...board];
                playerActive ? aux[1][1] = 1 : aux[1][1] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
            if (e.target.id === "position6") {
                let aux = [...board];
                playerActive ? aux[1][2] = 1 : aux[1][2] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
            if (e.target.id === "position7") {
                let aux = [...board];
                playerActive ? aux[2][0] = 1 : aux[2][0] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
            if (e.target.id === "position8") {
                let aux = [...board];
                playerActive ? aux[2][1] = 1 : aux[2][1] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
            if (e.target.id === "position9") {
                let aux = [...board];
                playerActive ? aux[2][2] = 1 : aux[2][2] = 2;
                setBoard(aux);
                setPlayerActive(!playerActive);
                let aux2 = e.target.className;
                playerActive ? e.target.className = aux2 + props.player1Weapon : e.target.className = aux2 + props.player2Weapon;
            }
        }
    }

    const ganador = (board) => {
        if (board[0][0] !== 0) {
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                board[0][0] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);
            }
        }

        if (board[0][0] !== 0) {
            if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
                board[0][0] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);
            }
        }
        if (board[1][0] !== 0) {
            if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
                board[1][0] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);

            }
        }
        if (board[2][0] !== 0) {
            if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
                board[2][0] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);
            }
        }

        if (board[0][2] !== 0) {
            if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                board[0][2] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);
            }
        }

        if (board[0][0] !== 0) {
            if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
                board[0][0] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);
            }
        }
        if (board[0][1] !== 0) {
            if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
                board[0][1] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);
            }
        }
        if (board[0][2] !== 0) {
            if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
                board[0][2] === 1 ? setWinner("Winner " + props.player1) : setWinner("Winner " + props.player2);
                setGameActive(false);
            }
        }
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        
        <div className={"d-none" + (props.mostrar === false ? "" : "d-none")}>
            <div className="row text-center mt-5">
                <div className="col-12">
                    {winner === "" ? <p>It is {playerActive ? props.player1 : props.player2}'s turn! </p> : ""}
                    <h3 id="winner">{winner}</h3>
                    <a href="/#" className="btn btn-primary" onClick={refreshPage}>Start Over</a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 col-md-4">
                    <div className="row fila border-bottom border-info" id="box-space">
                        <div className="col-4 col-md-4 border-right border-info " id="position1" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                        <div className="col-4 col-md-4 border-right border-info " id="position2" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                        <div className="col-4 col-md-4" id="position3" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                    </div>
                    <div className="row fila border-bottom border-info" id="box-space">
                        <div className="col-4 col-md-4 border-right border-info" id="position4" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                        <div className="col-4 col-md-4 border-right border-info" id="position5" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                        <div className="col-4 col-md-4" id="position6" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                    </div>
                    <div className="row fila" id="box-space">
                        <div className="col-4 col-md-4 border-right border-info" id="position7" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                        <div className="col-4 col-md-4 border-right border-info" id="position8" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                        <div className="col-4 col-md-4" id="position9" onClick={(e) => { jugadas(e); ganador(board) }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GameBoard;
