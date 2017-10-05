import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import LinkList from './LinkList';
import CreateLink from './CreateLink'
import Login from './Login';
import Search from './Search';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className='center w85'>
                <Header />
                <div className='ph3 pv1 background-gray'>
                    <Switch>
                        <Route exact path='/search' component={Search}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/' component={LinkList}/>
                        <Route exact path='/create' component={CreateLink}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;