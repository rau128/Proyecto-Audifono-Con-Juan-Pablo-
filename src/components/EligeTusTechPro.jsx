import Modelos from "./Modelos";

const EligeTusTechPro = () => {
  return (
    <main className="elige-tus-tech-pro">
      <h2 className="degragado-verde tc">Elige Tus TechPRO</h2>

      <div className="contenedor-audifonos">
        <Modelos
          modelo="x"
          marca={"TechPRO X"}
          precio={299}
          url="img/modelo-x.svg"
        />
        <Modelos
          modelo="y"
          marca={"TechPRO Y"}
          precio={399}
          url="img/modelo-y.svg"
        />
        <Modelos
          modelo="z"
          marca={"TechPRO Z"}
          precio={499}
          url="img/modelo-z.svg"
        />
      </div>
    </main>
  );
};

export default EligeTusTechPro;
