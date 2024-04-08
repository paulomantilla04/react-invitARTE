import Accordian, { AccordianItem } from "../components/Accordian";


const Preguntas = () => (
  <>
      <section className='flex max-[768px]:flex-col flex-col items-center justify-center mt-10 gap-20 mb-32' id='faq'>
        <div className="flex flex-col items-center justify-center text-[#2B2B2B]">
          <h1 className='text-4xl lg:text-5xl font-inter font-black text-center'>Preguntas más frecuentes</h1>
          <p className='font-inter font-regular mt-3 px-8 text-sm w-72 lg:w-full lg:text-lg text-center mb-5'>Si no encuentras lo que buscas contáctanos por <span className="font-semibold">Instagram</span></p>


          <Accordian className="w-64 lg:w-[32rem]">
            <AccordianItem value="1" trigger="¿Cómo funciona InvitARTE?">
              <p>
              InvitARTE es un servicio de invitaciones digitales personalizadas para cualquier ocasion. Simplemente contáctanos para hacer
una invitación a tu medida.
              </p>
            </AccordianItem>
            <AccordianItem value="2" trigger="¿Qué tipos de eventos puedo celebrar con InvitARTE?">
              <p>
              Puedes celebrar cualquier tipo de evento con InvitARTE, desde cumpleaños y bodas hasta reuniones corporativas y eventos especiales. Nuestros diseños se adaptan a una amplia variedad de ocasiones.
              </p>
            </AccordianItem>
            <AccordianItem value="3" trigger="¿Cuál es el precio de una invitación?">
              <p>
              Por el momento manejamos solamente el paquete inicial que empieza desde los <span className="font-semibold">$849</span>
              </p>
            </AccordianItem>
            <AccordianItem value="4" trigger="¿Cuáles son los tiempos de entrega?">
              <p>
              Nuestros tiempos de entrega van desde los 5 a 10 días después de haber recibido la información completa de tu evento.
              </p>
            </AccordianItem>
            <AccordianItem value="5" trigger="¿Cómo se confirma la asistencia?">
              <p>
              En el momento que tú hagas llegar la invitación a cualquiera de tus invitados, ellos tendrán un botón para confirmar su asistencia y a 
ti llegará un mensaje a Whatsapp o SMS con el nombre del invitado y su número de acompañantes. <span className="font-semibold">Ejemplo: Juan Pérez confirmó su asistencia con 3 acompañantes.</span>
              </p>
            </AccordianItem>
          </Accordian>

        </div>
      </section>  
  </>
);

export default Preguntas;