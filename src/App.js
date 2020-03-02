import React from 'react';
import List from './list';
import STORE from './store';

function App(props){
  store:{
    lists: [],
    allCards: {}
    }
  };

function Display(){
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {store.lists.map(list => 
          <List key={list.id} header={list.header} index={list.cardIds.map(id => 
            store.allCards[id])
            }/>
          )
        }
      </div>
    </main>
  );
}

export default App;