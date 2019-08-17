import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Card from './components/Card';

// API
const cardElements = [
  {
    id: 1,
    title: 'Esto es una imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Esto es otra imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 3,
    title: 'Person using laptop',
    author: 'John Schnobrich',
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 1,
    title: 'Esto es una imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Esto es otra imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 3,
    title: 'Person using laptop',
    author: 'John Schnobrich',
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 1,
    title: 'Esto es una imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Esto es otra imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 3,
    title: 'Person using laptop',
    author: 'John Schnobrich',
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 1,
    title: 'Esto es una imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Esto es otra imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 3,
    title: 'Person using laptop',
    author: 'John Schnobrich',
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 1,
    title: 'Esto es una imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Esto es otra imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 3,
    title: 'Person using laptop',
    author: 'John Schnobrich',
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 1,
    title: 'Esto es una imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Esto es otra imagen',
    author: 'Unsplash',
    cover: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 3,
    title: 'Person using laptop',
    author: 'John Schnobrich',
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }
];

function App() {
  return (
    <>
      <Navigation />
      <main className="main">
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Hello to my webpage</h1>
            <h2 className="hero-subtitle">The internet’s source of freely useable images.</h2>
          </div>
        </section>
        <section className="content">
          <div className="container grid-container">
            {cardElements.map((card, index) =>
              <Card key={index} card={card} />)}
          </div>
          <div className="container">
            <button className="btn-showmore">Show more</button>
          </div>
        </section>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
