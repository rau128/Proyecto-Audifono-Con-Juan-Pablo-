import Icono from "./Icono";

const SeccionIconos = () => {
  return (
    <section className="seccion-iconos">
      <Icono
        url={"../public/img/icono-sonido.svg"}
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique, ducimus, aperiam ipsa obcaecati, ipsum doloribus debitis sint iusto quod voluptatem? Recusandae veritatis perspiciatis quos! Quam iure dolorem qui ullam."
        h2="Gran Sonido"
      />
      <Icono
        url={"../public/img/icono-garantia.svg"}
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique, ducimus, aperiam ipsa obcaecati, ipsum doloribus debitis sint iusto quod voluptatem? Recusandae veritatis perspiciatis quos! Quam iure dolorem qui ullam."
        h2="Garantia De Por Vida"
      />
      <Icono
        url={"../public/img/icono-bateria.svg"}
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique, ducimus, aperiam ipsa obcaecati, ipsum doloribus debitis sint iusto quod voluptatem? Recusandae veritatis perspiciatis quos! Quam iure dolorem qui ullam."
        h2="+20 Horas De Bateria"
      />
    </section>
  );
};

export default SeccionIconos;
