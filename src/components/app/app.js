import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusIndex from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';


const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'dddd'},
        {label:'this is good', important: false, id: 'ddds'},
        {label: 'kukareku', important: false, id: 'dddad'},
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusIndex/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>        
    )
}

export default App;