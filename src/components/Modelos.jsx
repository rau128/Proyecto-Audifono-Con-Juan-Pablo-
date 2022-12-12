const Modelos = ({ modelo, marca, precio, url }) => {
  return (
    <div className={`modelos ${modelo}`}>
      <div className="modelo-info">
        <h3>{marca}</h3>
        <span>${precio}</span>
      </div>

      <a href={`${url}`} target="_blank">
        {" "}
        <img
          src={url}
          alt={url}
          className="imagen-audifono"
          width={140}
          height={140}
        />
      </a>
    </div>
  );
};

export default Modelos;
