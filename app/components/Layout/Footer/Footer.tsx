import * as React from 'react';

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="columns">
        <h4 className="column author">
          <strong>Starter Toolkit</strong> by&nbsp;
          <a href="https://www.facebook.com/OleksandrRudin" target="_blank">
            Alex Rudin
          </a> 
        </h4>
        <h4 className="column">
          <strong>Contribute on Github</strong>
          <ul>
            <li>
              <a
                className="github-button"
                href="https://github.com/sFiFty"
                aria-label="Follow @sFiFty on GitHub">
                Follow @sFiFty
              </a>
            </li>
            <li>
              <a
                className="github-button"
                href="https://github.com/sFiFty/starter-tool-kit"
                data-icon="octicon-star"
                aria-label="Star Starter Toolkit on GitHub">
                Star Starter Toolkit
              </a>
            </li>
            <li>
              <a
                className="github-button"
                href="https://github.com/sFiFty/starter-tool-kit/fork"
                data-icon="octicon-repo-forked"
                aria-label="Fork sFiFty/starter-tool-kit on GitHub">
                Fork
              </a>
            </li>
          </ul>
        </h4>
      </div>

     </div>
  </footer>
)
