import * as React from 'react';

import './styles.scss';

export const About = () => {
  return (
    <div className="about-container container">
      <div className="about-item is-size-6">
        <h1 className="is-size-5">About Starter Toolkit</h1>
        <p>The main goal of Started Toolkit is to help quickly build new applications.</p>
        <p>I am as a software engineer know how much time should be spent to build the skeleton of the application. It is quite a long period of time. </p>
        <p>I will build a web tool which helps you to not spend the time to develop structure.</p>
      </div>
      <div className="about-item is-size-6">
        <h1 className="is-size-5">What Starter Toolkit uses:</h1>
        <ul>
          <li>
            <a href="https://expressjs.com/" target="_blank">
              Express
            </a> as a backend framework for&nbsp;
            <a href="https://nodejs.org" target="_blank">Node.js</a>
          </li>
          <li>
            <a href="https://reactjs.org/" target="_blank">
              React
            </a> as a frontend framework
          </li>
          <li>
            <a href="https://nextjs.org/" target="_blank">
              NEXT.js
            </a> for server side rendering
          </li>
          <li>
            <a href="https://www.typescriptlang.org/" target="_blank">
              TypeScript
            </a> language to build more reliable project
          </li>
          <li>
            <a href="https://bulma.io/" target="_blank">
              Bulma
            </a> as a CSS framework
          </li>
          <li>
            <a href="https://www.mongodb.com/" target="_blank">
              MongoDb
            </a> as a database
          </li>
          <li>
            <a href="https://firebase.google.com/" target="_blank">
              Firebase
            </a> for users auth and files storage
          </li>
          <li>
            <a href="https://www.heroku.com/" target="_blank">
              Heroku
            </a> as a cloud platform for the building, delivering, monitoring and scaling apps
          </li>
        </ul>
      </div>
    </div>
  );
}
