import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="waves waves-top-down">
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>
          <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>
          <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>
        </svg>
      </div>
      <ul>
        <li>
          <a
            href="mailto:cristianmaschio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CristianMaschio@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cristian-maschio-37004a146"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/cristian-maschio-37004a146
          </a>
        </li>
        <li>
          <a
            href="https://github.com/CristianMaschio"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/CristianMaschio
          </a>
        </li>
      </ul>
    </footer>
  );
}
