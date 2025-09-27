function App() {
  const name = "Андрій Норик";

  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };

  const num1 = 10;
  const num2 = 25;
  const sum = num1 + num2;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="https://picsum.photos/300/200" alt="Випадкове зображення" />
      <p>
        Улюблений сайт:{" "}
        <a href={favoriteSite.url} target="_blank" rel="noreferrer">
          {favoriteSite.name}
        </a>
      </p>
      <p>
        Сума чисел {num1} + {num2} = {sum}
      </p>
      <h2>Мої улюблені кольори:</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
