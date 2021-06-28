import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { TicTacToe, OptionsView } from '../Components';
import { firebase } from "../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from 'my-customhook-collection';
import { Spin } from 'antd';
const MainRouter = () => {
    const db = firebase.firestore();
    const refColl = db.collection("TicTacToe");
    const [Data] = useOnSnapshotCollection(refColl);
    return (
        <Router>
            <div>
                {Data ? <Switch>
                    {Data && Data.map((item) => <Route exact path={`/game/${item.id}`} component={() =>
                        <TicTacToe MainData={item} />} />)}
                    <Route exact path="/options" component={OptionsView} />
                    <Redirect to="/options" />
                </Switch> : <div className="OptionView-wait-container"><Spin size="large" /></div>}
            </div>
        </Router>
    )
};

export default MainRouter;