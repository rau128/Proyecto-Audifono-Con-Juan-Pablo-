const Icono = ({ url, h2, p }) => {
  return (
    <div className="iconos">
      <img src={url} alt="icono-sonido" width={50} height={50} />

      <h2>{h2}</h2>

      <p>{p}</p>
    </div>
  );
};

export default Icono;
