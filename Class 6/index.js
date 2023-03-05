//How React Works Behind The Scenes

// const root = document.querySelector("#root");
// const h1 = document.createElement("h1");
// h1.textContent = "Hello Everyone";
// root.appendChild(h1);

// const h1 = <h1>Hello Everyone</h1>; //This Is JSX

// console.log(h1);

function App() {
  return (
    <div>
      <h1>Hello Everyone</h1>;<h2>Hello From Heading 2</h2>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
