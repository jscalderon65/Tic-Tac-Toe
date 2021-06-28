import React, { useEffect } from "react";
import {Navbar, ShareGame, UserInvitation} from './index.js';
import { useFirebaseUser } from "my-customhook-collection";
import { firebase } from "../Firebase/FirebaseConfig.js";
import { GoogleAuth, FirebaseLogOut } from "../Firebase/FirebaseAuth.js";
import { addUser, deleteServer } from "../Firebase/FirebaseOperations.js";
import {Loading3QuartersOutlined} from '@ant-design/icons'
import { useHistory } from "react-router-dom";
import { Typography } from 'antd';
const WaitRoom = ({ MainData, pathNameState }) => {
  const {Paragraph}=Typography;
  const history = useHistory();
  const { Users, id } = MainData;
  const [UserData, isOn] = useFirebaseUser(firebase);

  const onUserLeave = () => {
    FirebaseLogOut().then(() => {
      deleteServer(pathNameState)
        .then(() => {
          history.push(`/options`);
        })
        .catch(() => {
          history.push(`/options`);
        });
    });
  };

  const onUserIngress = () => {
    GoogleAuth()
      .then((user) => {
        if (user === undefined) {
          console.log("Error");
        } else {
          addUser(id, [
            ...Users,
            {
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
              uid: user.uid,
            },
          ]);
        }
      })
      .catch(() => console.log("Error"));
  };

  useEffect(() => {
    const OnUser = () => {
      let cont = 0;
      UserData&&Users.map((item) => {
        if (item.uid === UserData.uid) {
          cont = cont + 1;
          return item;
        }
        return item;
      });
      if (cont === 1) {
        console.log("Ya está: ", UserData.displayName);
      } else {
        console.log(Users);
        UserData&&addUser(
          id,
          [
            ...Users,
            {
              name: UserData.displayName,
              email: UserData.email,
              photoUrl: UserData.photoURL,
              uid: UserData.uid,
            },
          ],
          "WaiRoom"
        );
      }
    };
    isOn && OnUser();
    // eslint-disable-next-line
  }, [isOn]);

  return (
    <div className="OptionsView-container">
      <Navbar/>
      <div className="WaitRoom-container animate__animated animate__fadeIn">
        {!isOn ? (
          <UserInvitation pathNameState={pathNameState} Users={Users} onUserIngress={onUserIngress}/>
        ) : (
          <div className="WaitRoom-wait-view">
            <div className="WaitRoom-wait-view-title">
              <Loading3QuartersOutlined style={{marginTop:"20px",marginBottom:"20px"}}spin={true}/>
              ! Esperando a otro jugador !
              <br/>
              <br/>
              Código:
              <Paragraph style={{color:"white"}} copyable>{pathNameState}</Paragraph>
            </div>
            <div className="WaitRoom-wait-view-buttons">
              <ShareGame/>
              <button className="btn btn-danger" onClick={onUserLeave}>
                Abandonar <i class="fas fa-sign-out-alt"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitRoom;
