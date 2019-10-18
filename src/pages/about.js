import React from "react"
// import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="about">
      <div className="about-story">
        <p>
          Hello I'm <span className="text-crimson">Kael</span>, a self-taught
          <span className="text-crimson">
            {" "}
            UI|UX designer and Frontend developer{" "}
          </span>
          from
          <span className="text-crimson"> Cameroon</span>. <br />
          In other words I make interfaces like what you see here and I focus on
          what are essential for your users to quickly understand what you do so
          they can get started with you. That's why I like to work on projects
          who are useful to people.
        </p>
        <p>
          Because everyone have his story but to not bother you with that, you
          can read my story
          {/* <span className="disabled"> here </span> */} to know me better or
          read some random things about me down below.
        </p>
      </div>
      <div className="workflow">
        <h3 className="title">Random things</h3>
        <p>
          I love animes and i've watched tons, my favorite is Full Metal
          Alchemist Brotherhood.
          {/* Checkout my anime list{" "}
          <span className="disabled">here</span> */}
        </p>
        <p>
          I've never liked or even updated Windows in my life, but today I
          design applications and people are almost forced to update them and I
          find it funny.
        </p>
        <p>
          I don't know why, but in multi-storey buildings, I like the second
          floor.
        </p>
        <p>
          I'm panicked and stressed when I see over seven tabs open on my
          browser.
        </p>
      </div>
      <div className="workflow">
        <h3 className="title">Technologies and tools I use to work with</h3>
        <span className="subtitle">Frontend: Langauages & Libraries</span>
        <div className="stack">
          <svg viewBox="0 0 128 128">
            <path
              fill="#000"
              d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"
            />
          </svg>
          <svg viewBox="0 0 128 128">
            <path
              fill="#000"
              d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"
            />
          </svg>
          <svg viewBox="0 0 128 128">
            <path fill="#000" d="M1.408 1.408h125.184v125.185h-125.184z" />
            <path
              fill="#fff"
              d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
            />
          </svg>
          <svg viewBox="0 0 128 128">
            <path
              fill="#000"
              d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"
            />
          </svg>
          <svg viewBox="0 0 128 128">
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
          </svg>
        </div>
        <span className="subtitle">Design: Tools & practices</span>
        <div className="stack">
          <svg viewBox="0 0 2500 2437.5">
            <path
              fill="#000"
              d="M2057.3,2437.5H442.7C197.9,2437.5,0,2239.6,0,1994.8V442.7C0,197.9,197.9,0,442.7,0h1614.6
	C2302.1,0,2500,197.9,2500,442.7v1552.1C2500,2239.6,2302.1,2437.5,2057.3,2437.5z"
            />
            <path
              fill="#000"
              d="M2017.7,2333.3H482.3c-208.3,0-378.1-169.8-378.1-378.1V482.3c0-208.3,169.8-378.1,378.1-378.1h1534.4
	c209.4,0,378.1,169.8,378.1,378.1v1471.9C2395.8,2163.5,2226,2333.3,2017.7,2333.3L2017.7,2333.3z"
            />
            <path
              fill="#fff"
              d="M988.5,1140.6l291.7,560.4c5.2,8.3,2.1,16.7-6.3,16.7h-181.3c-11.5,0-16.7-3.1-21.9-13.5
	c-66.7-137.5-134.4-275-204.2-422.9h-2.1c-62.5,139.6-131.3,286.5-197.9,424c-5.2,8.3-10.4,11.5-18.8,11.5H476
	c-10.4,0-11.5-8.3-6.2-14.6l285.4-543.8l-276-550c-6.3-8.3,0-14.6,6.2-14.6h179.2c10.4,0,14.6,2.1,18.7,11.5
	c65.6,137.5,132.3,279.2,194.8,417.7h2.1c60.4-137.5,127.1-280.2,191.7-416.7c5.2-8.3,8.3-13.5,18.8-13.5h167.7
	c8.3,0,11.5,6.3,6.3,14.6L988.5,1140.6z M1331.3,1310.4c0-242.7,161.5-432.3,417.7-432.3c21.9,0,33.3,0,54.2,2.1v-276
	c0-6.3,5.2-10.4,10.4-10.4h164.6c8.3,0,10.4,3.1,10.4,8.3v956.3c0,28.1,0,63.5,5.2,102.1c0,6.3-2.1,8.3-8.3,11.5
	c-87.5,41.7-179.2,60.4-266.7,60.4C1492.7,1733.3,1331.2,1593.8,1331.3,1310.4L1331.3,1310.4z M1803.1,1043.8
	c-14.6-6.3-35.4-10.4-60.4-10.4c-131.3,0-222.9,101-222.9,268.8c0,191.7,93.8,268.8,211.5,268.8c25,0,52.1-3.1,71.9-11.5V1043.8z"
            />
          </svg>
          <svg viewBox="0 130.746 595.279 580.398">
            <path
              d="M24.803 155.549h545.674v530.792H24.803V155.549z"
              fill="#000"
            />
            <path
              d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm389.908-373.539c0-1.984.744-2.977 2.977-2.977h38.941c1.983 0 2.976.744 2.976 2.977v195.699c0 1.983-.496 2.976-2.976 2.976h-38.445c-2.48 0-3.225-1.24-3.225-3.224V337.606h-.248zm-2.728-56.304c0-15.874 11.161-25.299 25.3-25.299 15.13 0 25.299 10.169 25.299 25.299 0 16.37-10.665 25.299-25.795 25.299-14.387.001-24.804-8.929-24.804-25.299zM275.565 419.209c-6.944-27.532-23.314-87.556-29.516-116.576h-.496c-5.209 29.02-18.354 78.13-28.771 116.576h58.783zm-68.953 40.182l-19.595 74.41c-.496 1.983-1.24 2.479-3.72 2.479h-36.461c-2.48 0-2.977-.744-2.48-3.72l70.441-246.546c1.24-4.464 1.984-8.433 2.48-20.586 0-1.736.744-2.48 1.984-2.48h52.087c1.736 0 2.48.496 2.977 2.48l78.874 267.628c.496 1.983 0 3.224-1.984 3.224h-41.174c-1.984 0-3.225-.496-3.72-2.231l-20.339-74.658h-79.37z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default About
