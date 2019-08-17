import React from 'react';
import './App.scss';
import Logotype from './assets/logotype.png';

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
      <header className="header">
        <div className="container grid-container">
          <div className="logo-wrapper">
            <img src={Logotype} width="50" alt="" />
          </div>
          <div className="navbar">
            <ul className="nav">
              <li className="nav-item"><a href="#">Home</a></li>
              <li className="nav-item"><a href="#">About</a></li>
              <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
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
              <div
                key={index}
                className="card"
                style={{
                  backgroundImage: `url(${card.cover})`,
                }}>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <h4 className="card-author">{card.author}</h4>
                </div>
              </div>)}
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
