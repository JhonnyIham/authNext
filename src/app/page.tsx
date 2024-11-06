"use client";

import { signIn } from "next-auth/react";
import Image from 'next/image';  // Asegúrate de importar Image

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-900">
      <section className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-semibold text-gray-100 text-center mb-6">
          Facultad de Ingeniería de Sistemas - UNCP
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200">Bienvenidos</h2>
          <p className="text-lg text-gray-400 mt-4">
            La <strong>Facultad de Ingeniería de Sistemas</strong> de la{" "}
            <strong>Universidad Nacional del Centro del Perú (UNCP)</strong> tiene como misión formar
            profesionales de alta calidad, capaces de aplicar sus conocimientos en el diseño, desarrollo y gestión de
            soluciones tecnológicas que respondan a las necesidades del entorno empresarial, social y científico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200">Visión y Misión</h2>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-300">Visión</h3>
            <p className="text-lg text-gray-400 mt-2">
              Ser reconocidos como un referente nacional e internacional en la formación de profesionales altamente
              capacitados en Ingeniería de Sistemas, con un enfoque innovador y ético, que contribuyan al desarrollo
              sostenible y la transformación digital de la sociedad.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-300">Misión</h3>
            <p className="text-lg text-gray-400 mt-2">
              La misión de nuestra facultad es ofrecer una formación integral, basada en el desarrollo de competencias
              técnicas, investigativas y éticas, que permitan a nuestros egresados sobresalir en el ámbito de la
              ingeniería de sistemas, enfrentando los retos tecnológicos del futuro con creatividad y responsabilidad.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200">Carreras Académicas</h2>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-300">1. Ingeniería de Sistemas</h3>
            <p className="text-lg text-gray-400 mt-2">
              La carrera de <strong>Ingeniería de Sistemas</strong> busca formar profesionales capaces de diseñar,
              implementar y gestionar sistemas informáticos y tecnológicos en diversas áreas.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-400 text-lg">
              <li>Duración: 5 años</li>
              <li>Modalidad: Presencial</li>
              <li>Requisitos: Tener el ciclo básico aprobado y pasar el examen de admisión.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-300">2. Tecnologías de la Información y Comunicación (TIC)</h3>
            <p className="text-lg text-gray-400 mt-2">
              La carrera en <strong>TIC</strong> está orientada a la capacitación de profesionales capaces de gestionar
              infraestructuras tecnológicas, desarrollar software y sistemas para optimizar procesos.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-400 text-lg">
              <li>Duración: 4 años</li>
              <li>Modalidad: Presencial y semipresencial</li>
              <li>Requisitos: Examen de admisión o egresado de una carrera técnica relacionada.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200">Infraestructura y Recursos</h2>
          <p className="text-lg text-gray-400 mt-4">
            La facultad cuenta con modernas instalaciones y recursos tecnológicos que apoyan el aprendizaje y
            desarrollo de nuestros estudiantes:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-400 text-lg">
            <li>Laboratorios de Cómputo equipados con tecnología de punta</li>
            <li>Biblioteca Virtual con acceso a libros y publicaciones especializadas</li>
            <li>Espacios de Innovación para el desarrollo de proyectos de investigación y emprendimiento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200">Investigación y Proyectos</h2>
          <p className="text-lg text-gray-400 mt-4">
            La Facultad de Ingeniería de Sistemas está comprometida con la <strong>innovación y la investigación científica</strong>.
            Nuestros estudiantes participan en proyectos aplicados en colaboración con la industria y otras facultades de la UNCP.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-400 text-lg">
            <li>Desarrollo de Sistemas de Gestión Empresarial con empresas locales</li>
            <li>Investigación en Inteligencia Artificial aplicada a la Salud</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200">Admisión</h2>
          <p className="text-lg text-gray-400 mt-4">
            La facultad abre sus puertas a nuevos estudiantes cada año a través del proceso de admisión regular.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-400 text-lg">
            <li>Convocatoria: Abierta todos los años en el mes de enero</li>
            <li>Examen de admisión: Incluye pruebas de matemáticas, física, lógica y razonamiento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200">Contactos</h2>
          <p className="text-lg text-gray-400 mt-4">
            - Dirección: Facultad de Ingeniería de Sistemas, UNCP, Huancayo, Junín, Perú.
          </p>
          <p className="text-lg text-gray-400 mt-2">- Teléfono: (+51) 064-123456</p>
          <p className="text-lg text-gray-400 mt-2">- Correo Electrónico: ingenieria@uncp.edu.pe</p>

          <div className="mt-4 flex justify-center gap-4">
            <a href="https://www.facebook.com/FacultadIngenieriaUNCP" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook-logo.svg" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://twitter.com/FacultadSistemasUNCP" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-logo.svg" alt="Twitter" width={40} height={40} />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
