import { useState } from "react";

function Main({ name, debilidades, fortalezas, amenazas, oportunidades }) {
    const [value, setValue] = useState("");

    return (
      <main className="flex-grow px-12 p-10 text-2xl">
        <section>
          <h1>
            Hola <b>{name}</b>, bienvenido!
          </h1>
          <br></br>
          <h2 className="font-bold item-center">Introducción </h2>
          <br></br>
          <p>
            La planificación estratégica es un proceso fundamental para el éxito y la competitividad en el mercado automotriz, especialmente para un modelo icónico como el Toyota Corolla 2024. Este proceso implica definir objetivos a largo plazo, identificar oportunidades y amenazas del entorno, y alinear los recursos y capacidades de la empresa para alcanzar sus metas. <br />

            El Toyota Corolla, conocido por su fiabilidad, eficiencia y accesibilidad, ha sido uno de los vehículos más vendidos a nivel mundial durante décadas. La versión 2024 no es una excepción, y su planificación estratégica está diseñada para mantener y potenciar estos atributos, mientras se adapta a las nuevas tendencias y demandas del mercado.
          </p>
        </section>

        <br></br>

        <section>
          <h2 className="font-bold">
            Diagnóstico Actual
          </h2>
          <ol className="list-decimal ml-4 space-y-2 pl-4">
            <h3>Debilidades</h3>
            {debilidades.map((item) => (
              <li key={item.id}>{item.name}
                <p className="text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ol>

          <ol className="list-decimal ml-4 space-y-2 pl-4">
            <h3>Fortalezas</h3>
            {fortalezas.map((item) => (
                <li key={item.id}>{item.name}
                    <p className="text-sm text-gray-600">{item.description}</p>
                </li>
            ))}
          </ol>

          <ol className="list-decimal ml-4 space-y-2 pl-4">
            <h3>Amenazas</h3>
            {amenazas.map((item) => (
              <li key={item.id}>{item.name}
                <p className="text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ol>
          <ol className="list-decimal ml-4 space-y-2 pl-4">
            <h3>Oportunidades</h3>
            {oportunidades.map((item) => (
              <li key={item.id}>{item.name}
                <p className="text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
        <br></br>
       
       <section>
            <h2 className="font-bold">
                Identidad Organizacional
            </h2>
            <br /><br />
            <h3>Misión</h3>
            <p>
                Proporcionar a nuestros clientes un vehículo compacto que combine fiabilidad, eficiencia y tecnología avanzada, con un enfoque en la sostenibilidad y la satisfacción del cliente, a través de una red global de distribución y servicio que garantice un alto nivel de calidad y valor
            </p>
            <h3>Visión</h3>
            <p>
                Ser el vehículo compacto preferido a nivel mundial, destacando por su fiabilidad, innovación tecnológica y compromiso con la sostenibilidad, mientras brindamos una experiencia excepcional para nuestros clientes.
            </p>
            <h3>Políticas</h3>
            <p>

            </p>
       </section>
      </main>
    );
}
  
export default Main;
  