import React from 'react';
import './Projects.css'
import { useEffect } from 'react';

export default function Projects() {

  useEffect(() => {
    document.body.className = 'projects-body';
  }, []);
  return(
    <div class="projects-container">
      <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                <div className="code-live">
                    <h4>
                        <a id="code-live-text" href="https://github.com/jeshaiahmiller/SAF" target="_blank">See Code</a>
                    </h4>
                    <h4>
                        <a id="code-live-text" href="https://saveandfinance.netlify.app/" target="_blank">Live Site</a>
                  </h4>
              </div>
            <p>S-A-F is an application that allows users to create their own budgets to use with their everyday expenses. This app is implemented with full <b>CRUD</b> and a clean design.</p>
            <h4 className="proj-head">Technologies:</h4>
            <p className="techs">Django, HTML, CSS, Javascript, React, Python </p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
          <div class="content">
            <div className="code-live">
                    <h4>
                        <a id="code-live-text" href="https://github.com/jeshaiahmiller/The-More-You-Know" target="_blank">See Code</a>
                    </h4>
                    <h4>
                        <a id="code-live-text" href="https://the-more-you-know.netlify.app" target="_blank">Live Site</a>
                  </h4>
              </div>
            <p>The More You know is an app that mimics Q/A apps. Users can ask and answer any question they want. This utilizes http post and get requests.</p>
            <h4 className="proj-head">Technologies:</h4>
            <p className="techs"> HTML, CSS, Javascript, React </p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
              <i class="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                <div className="code-live">
                    <h4>
                        <a id="code-live-text" href="https://github.com/kimcapgab/your-craft" target="_blank">See Code</a>
                    </h4>
                    <h4>
                        <a id="code-live-text" href="https://your-craft.netlify.app/" target="_blank">Live Site</a>
                  </h4>
              </div>
            <p>Your Craft is an application in which brewers other users can create beverages for display. This app contains full <b>CRUD</b> functionality.</p>
            <h4 className="proj-head">Technologies:</h4>
            <p className="techs"> HTML, CSS, Javascript, React </p>
                </div>
            </div>
        </div>
    </div>
  )
}
