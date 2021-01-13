import React, { Component } from 'react';
import nextId from "react-id-generator";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusIndex from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

// import styled from 'styled-components';

// const AppBlock = styled.div`
//         margin: 0 auto;
//         max-width: 800px;
//         `
export default class App extends Component{
    constructor (props){
        super(props);
        this.state = {
            data:[
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label:'this is good', important: false, like: false, id: 2},
                {label: 'kukareku', important: false, like: false, id: 3},
        ],
        term : '',
        filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.nextId = this
    }


    deleteItem(id) {
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id);
            return {
                data:[...data.slice(0, index), ...data.slice(index +1)]
            }

        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        console.log(newItem.id);
        this.setState(({data})=> {
            return {data: [...data, newItem]};
        });
    }



    onToggleImportant (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            return {data: [...data.slice(0, index),newItem, ...data.slice(index +1)]}
        });

    }

    onToggleLike (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            return {data: [...data.slice(0, index),newItem, ...data.slice(index +1)]}
        });
    }

    searchPost (items, term) {
        if (term.length === 0 ) {
            return items
        }

        return items.filter( item => {
            return item.label.indexOf(term) > -1
        });

    }

    filterPosts(items, filter) {
        if (filter ==='like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render () {
        const {data, term, filter} = this.state;
        const liked = data.filter((elem)=> elem.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

        return (
        <div className="app">
            <AppHeader
                liked={liked}
                allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}/>
                <PostStatusIndex 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLike={this.onToggleLike}/>
            <PostAddForm
                onAdd={this.addItem}
                />
        </div>        
        )
    }
}
