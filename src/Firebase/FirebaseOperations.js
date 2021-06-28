import { firebase } from "./FirebaseConfig";
import { message } from 'antd';
import 'antd/dist/antd.css';
const { success, error } = message;

const createServer = async () => {
    try {
        const resp = await firebase.firestore().collection("TicTacToe").add({
            Table: [{ box: 1, color: "1" }, { box: 2, color: "2" }, { box: 3, color: "3" }, { box: 4, color: "4" }, { box: 5, color: "5" }, { box: 6, color: "6" }, { box: 7, color: "7" }, { box: 8, color: "8" }, { box: 9, color: "8" }],
            Users: [],
            NumberState: 0,
            UserTurn: ""
        });
        success("Sala creada");
        return resp.id;
    } catch (e) {
        console.log(e);
        error("Error al crear sala");
    }
};
const deleteServer = async (pathNameState) => {
    try {
        await firebase.firestore().collection("TicTacToe").doc(pathNameState).delete();
        success("Has abandonado la sala y cancelado la partida");
    } catch {
        error("Error al abandonar sala");
    }
}
const addUser = async (Doc, Users, Component) => {
    try {
        const resp = await firebase.firestore().collection("TicTacToe").doc(Doc).update({
            Users
        });
        success("Usuario nuevo");
        return resp;
    } catch (e) {
        console.log(e, Users, Component);
        error("Error al agregar usuario a la sala");
    }
}
const tableGameHandler = (Table, NumberState, UserTurn, id) => {
    firebase.firestore().collection("TicTacToe").doc(id).update({
        NumberState: NumberState + 1,
        Table,
        UserTurn
    }).catch(() => {
        error("Error updating document");
    });
}
export { createServer, deleteServer, addUser, tableGameHandler };