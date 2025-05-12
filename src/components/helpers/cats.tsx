import "./cats.css";
const Cats = ({
  src,
  title,
  age,
  area,
}: {
  src: string;
  title: string;
  age: string;
  area: string;
}) => {
  return (
    <div className="buttons">
      <div className="card">
        <img src={src} style={{ width: "400px" }} alt={title} />
        <div
          style={{
            padding: "12px",
            gap: "12px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontWeight: 500,
              fontSize: "24px",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            {age}
          </p>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
};

export default Cats;
