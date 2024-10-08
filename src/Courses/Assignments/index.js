export default function Assignments() {
  return (
      <div id="wd-assignments">
          <input id="wd-search-assignment"
                 placeholder="Search for Assignments" />
          <button id="wd-add-assignment-group">+ Group</button>
          <button id="wd-add-assignment">+ Assignment</button>

          <h3 id="wd-assignments-title">
              ASSIGNMENTS 40% of Total <button>+</button>
          </h3>

          <ul id="wd-assignment-list">
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link"
                     href="#/Kanbas/Courses/1234/Assignments/123">
                      A1 - ENV + HTML
                  </a>
              </li>
              
              {/* Additional assignments */}
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link"
                     href="#/Kanbas/Courses/1234/Assignments/124">
                      A2 - CSS Basics
                  </a>
              </li>
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link"
                     href="#/Kanbas/Courses/1234/Assignments/125">
                      A3 - JavaScript Essentials
                  </a>
              </li>
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link"
                     href="#/Kanbas/Courses/1234/Assignments/126">
                      A4 - React Introduction
                  </a>
              </li>
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link"
                     href="#/Kanbas/Courses/1234/Assignments/127">
                      A5 - API Integration
                  </a>
              </li>
          </ul>
      </div>
  );
}
