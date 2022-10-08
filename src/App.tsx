import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {StoreType} from './Redux/state';


type AppPropsType = {
    store: StoreType
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile posts={props.store.getStore().profilePage.posts}
                             dispatch={props.store.dispatch.bind(props.store)}
                             newPostText={props.store.getStore().profilePage.newPostText}/>}/>
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        dialogs={props.store.getStore().dialogsPage.dialogs}
                        messages={props.store.getStore().dialogsPage.messages}
                        newMessageText={props.store.getStore().dialogsPage.newMessageText}
                        dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
