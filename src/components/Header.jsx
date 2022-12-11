const Header = () => {
  return (
    <header className="header">
      <div className="imagen-header">
        <img
          src="../img/header.png"
          alt="imagen del header"
          width={200}
          height={200}
        />
      </div>

      <div className="contenido-header">
        <p>Sonido Profesional</p>
        <h1 className="degragado-verde">Tech Pro</h1>
        <p className="parrafo-descripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          debitis saepe dicta nesciunt ut at, libero assumenda id optio ipsa
          quam, nostrum minus sapiente fugit vitae eius sint ipsum impedit.
        </p>
        <p className="parrafo-precio">
          Desde <span>$299</span>{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
