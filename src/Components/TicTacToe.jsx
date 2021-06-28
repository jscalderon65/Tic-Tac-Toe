import React, { useState, useEffect } from "react";
import { message } from "antd";
import { firebase } from "../Firebase/FirebaseConfig";
import { FirebaseLogOut } from "../Firebase/FirebaseAuth";
import {
  deleteServer,
  tableGameHandler,
} from "../Firebase/FirebaseOperations.js";
import {
  WaitRoom,
  DontBelong,
  Navbar,
  StartZone,
  NavbarTicTacToe,
  OnWinUser,
} from "./index.js";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFirebaseUser } from "my-customhook-collection";
const TicTacToe = ({ MainData }) => {
  const history = useHistory();
  const [userData, isOn] = useFirebaseUser(firebase);
  const { Users, id, NumberState, UserTurn, Table } = MainData;
  const { success } = message;
  const { pathname } = useLocation();
  const [turnState, setTurnState] = useState(NumberState);
  const [pathNameState] = useState(pathname.split("/")[2]);
  const [IsUser, setIsUser] = useState(true);
  const [UserName, setUserName] = useState("");
  const [tableState, setTableState] = useState(Table);
  const [{ isEnd, state }, setEndState] = useState({
    isEnd: false,
    state: "",
  });
  const onUserLeave = () => {
    /*     FirebaseLogOut().then(() => {
      deleteServer(pathNameState)
        .then(() => {
          history.push(`/options`);
        })
        .catch(() => {
          history.push(`/options`);
        });
    }); */
    tableGameHandler(
      [
        { box: 1, color: "1" },
        { box: 2, color: "2" },
        { box: 3, color: "3" },
        { box: 4, color: "4" },
        { box: 5, color: "5" },
        { box: 6, color: "6" },
        { box: 7, color: "7" },
        { box: 8, color: "8" },
        { box: 9, color: "8" },
      ],
      -1,
      Users[0].name,
      id
    );
  };
  useEffect(() => {
    const isInTheGame = (userData) => {
      if (
        Users.filter((item) => item.name === userData.displayName).length > 0
      ) {
        /*         console.log(
          "Pertenece al juego",
          Users.filter((item) => item.name === userData.displayName)
        ); */
        setIsUser(true);
      } else {
        /*         console.log(
          "No pertenece",
          Users.filter((item) => item.name === userData.displayName)
        ); */
        setIsUser(false);
      }
    };
    userData && isInTheGame(userData);
    // eslint-disable-next-line
  }, [userData]);

  const onWinHandlerState = () => {
    setEndState({
      isEnd: true,
      state: true,
    });
  };
  const onTieHandlerState = () => {
    setEndState({
      isEnd: true,
      state: false,
    });
  };
  useEffect(() => {
    setUserName(Users[NumberState % 2 ? 1 : 0].name);
       // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const onWinHandler = () => {
      if (
        tableState[0].color === tableState[1].color &&
        tableState[0].color === tableState[2].color
      ) {
        onWinHandlerState();
      } else if (
        tableState[3].color === tableState[4].color &&
        tableState[3].color === tableState[5].color
      ) {
        onWinHandlerState();
      } else if (
        tableState[6].color === tableState[7].color &&
        tableState[6].color === tableState[8].color
      ) {
        onWinHandlerState();
      } else if (
        tableState[0].color === tableState[3].color &&
        tableState[0].color === tableState[6].color
      ) {
        onWinHandlerState();
      } else if (
        tableState[1].color === tableState[4].color &&
        tableState[1].color === tableState[7].color
      ) {
        onWinHandlerState();
      } else if (
        tableState[2].color === tableState[5].color &&
        tableState[2].color === tableState[8].color
      ) {
        onWinHandlerState();
      } else if (
        tableState[0].color === tableState[4].color &&
        tableState[0].color === tableState[8].color
      ) {
        onWinHandlerState();
      } else if (
        tableState[2].color === tableState[4].color &&
        tableState[2].color === tableState[6].color
      ) {
        onWinHandlerState();
      }
    };
    /* const isTie = () => {
      let equal = true;
      for (let i = 0; i < tableState.length - 1; i++) {
        if (typeof tableState[i] !== typeof tableState[i + 1]) {
          equal = false;
          break;
        }
      }
      return equal;
    }; 
      if (NumberState > 0 && isTie()) {
      onTieHandlerState();
    } */
    onWinHandler();
    // eslint-disable-next-line
  }, [tableState]);
  useEffect(() => {
    NumberState === 0 && success(`¡${Users[0].name} Inicia!`, 5);
       // eslint-disable-next-line
  }, []);
  const onHandleClick = (number, e) => {
    if (!e.target.style.background) {
      setTurnState(turnState + 1);
      setTableState(
        tableState.map((item) => {
          if (item.box === number) {
            item.color = NumberState % 2 ? "blue" : "red";
            return item;
          }
          return item;
        })
      );
      tableGameHandler(
        tableState,
        NumberState,
        Users[NumberState % 2 ? 1 : 0].name,
        id
      );
    } else {
      success("Casilla marcada!!");
    }
  };
  console.log(tableState, NumberState, Users, UserTurn);
  return Users.length === 2 ? (
    isOn && isOn ? (
      <>
        {isEnd ? (
          <OnWinUser
            state={state}
            UserInfo={Users[NumberState % 1 ? 0 : 0]}
            Button={
              <button
                className="btn btn-danger"
                onClick={() => {
                  tableGameHandler(
                    [
                      { box: 1, color: "1" },
                      { box: 2, color: "2" },
                      { box: 3, color: "3" },
                      { box: 4, color: "4" },
                      { box: 5, color: "5" },
                      { box: 6, color: "6" },
                      { box: 7, color: "7" },
                      { box: 8, color: "8" },
                      { box: 9, color: "8" },
                    ],
                    -1,
                    Users[0].name,
                    id
                  );
                  setEndState({
                    isEnd: false,
                    state: "",
                  });
                }}
              >
                Reiniciar
              </button>
            }
            UserTurn={UserTurn}
          />
        ) : IsUser ? (
          <>
            <Navbar />
            <NavbarTicTacToe
              Users={Users}
              ButtonLeave={
                <button className="btn btn-danger" onClick={onUserLeave}>
                  Abandonar <i class="fas fa-sign-out-alt"></i>
                </button>
              }
            />
            <div
              style={{
                color: "white",
                marginTop: "30px",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              Turno de: <b>{UserName}</b>
            </div>
            <div className="TicTactToe-container animate__animated animate__pulse">
              {Table.map(({ box, color }) => (
                <div
                  style={{ background: `${color}` }}
                  onClick={(e) => onHandleClick(box, e)}
                  key={box}
                >
                  {box}
                </div>
              ))}
            </div>
          </>
        ) : (
          <DontBelong />
        )}
      </>
    ) : (
      <div className="OptionsView-container">
        <Navbar />
        <StartZone />
      </div>
    )
  ) : (
    <WaitRoom MainData={MainData} pathNameState={pathNameState} />
  );
};

export default TicTacToe;
