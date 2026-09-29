<main>
  <h1>Users API</h1>

  <p>
    A small self-contained REST API built with Node.js and Express.
  </p>

  <section>
    <h2>Project Structure</h2>
    <pre><code> raprd_newroutewithouttest/
 |
 |-- app.js
 |-- users.json
 |-- package.json
 |-- README.md
 |
 |-- routes/
     |
     |-- users.js
     |-- users-by-id.js</code></pre>
  </section>

  <section>
    <h2>Branches</h2>
    <ul>
      <li>
        <code>main</code> — contains the initial version of the project.
      </li>
      <li>
        <code>features/userbyid</code> — contains the changes for the
        <code>/users/:id</code> route and represents the proposed pull request.
      </li>
    </ul>
  </section>

  <section>
    <h2>Route Guidelines</h2>
    <p>
      Every route must include its <strong>own automated test</strong>.
    </p>
    <p>
      The test must be defined in the same route file as the route
      implementation. A route should not be considered complete without
      its corresponding test.
    </p>
    <p>
      Each route file must export a single route object with the following
      structure:
    </p>
    <pre><code>{
  path: ...,
  method: ...,
  action: ...,
  test: ...
}</code></pre>
    
  </section>
  
  <section>
    <h2>Route Properties</h2>
    <ul>
      <li>
        <code>path</code> — the URL path handled by the route.
      </li>
      <li>
        <code>method</code> — the HTTP method used by the route, such as
        <code>GET</code>, <code>POST</code>, <code>PUT</code>, or
        <code>DELETE</code>.
      </li>
      <li>
        <code>action</code> — the function executed when the route is requested.
      </li>
      <li>
        <code>test</code> — the automated test that verifies the route behavior.
      </li>
    </ul>
    <p>
      When adding a new route, make sure all four properties are present and
      that the route's test is included in the same file.
    </p>
  </section>
</main>
