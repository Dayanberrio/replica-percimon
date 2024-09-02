import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#03ce94] text-white py-8">
        <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row justify-between">

            {/* Columna izquierda */}
            <div className="w-full md:w-1/2 mx-4 my-4 md:my-12 px-8 py-10 flex flex-col items-center md:items-start">
                <div className="mt-[-70px]">
                <img
                    src="https://www.percimon.com/wp-content/uploads/2022/08/logo2-1.png"
                    alt="Percimon Logo"
                    className="mb-4 w-[290px] h-[71px] flex"
                />
                </div>
                <div className="mt-4 md:mt-[250px] text-[16px] font-montserrat text-center md:text-left">
                <p>Calle 11 A # 31 A 89. Edificio Bosko</p><br />
                <p>Horario de atención oficina central:</p>
                <p>Lunes a Viernes de 8:00 am a 4:30 pm</p>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="w-full md:w-1/2 mx-4 my-4 md:mt-[-20px] px-8 py-10 flex flex-col items-center md:items-end">
                <div className="flex flex-col items-center md:items-end text-[16px] font-montserrat">
                    <ul className="space-y-2 text-center md:text-left">
                        <li><a href="#cultura">CULTURA</a></li>
                        <li><a href="#productos">PRODUCTOS</a></li>
                        <li><a href="#trabajo">TRABAJA CON NOSOTROS</a></li>
                        <li><a href="#encuentranos">ENCÚENTRANOS</a></li>
                        <li><a href="#contacto">CONTACTO</a></li>
                        <li><a href="#privacidad">POLÍTICA DE PRIVACIDAD</a></li>
                        <li><a href="#autorizacion">AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES</a></li>
                        <li><a href="#aviso">AVISO DE PRIVACIDAD</a></li>
                    </ul>
                    <div className="flex space-x-4 mt-4 justify-center md:justify-end ml-40">
                        <a href="https://www.facebook.com/percimonhelados"><img src="/src/images/icons8-facebook.png" alt="Facebook" className="h-6" /></a>
                        <a href="https://www.instagram.com/percimon/"><img src="/src/images/icons8-instagram.png" alt="Instagram" className="h-6" /></a>
                        <a href="https://www.linkedin.com/company/percimon/"><img src="/src/images/icons8-linkedin.png" alt="LinkedIn" className="h-6" /></a>
                        <a href="https://open.spotify.com/artist/percimon"><img src="/src/images/icons8-spotify.png" alt="Spotify" className="h-6" /></a>
                    </div>
                </div>
            </div>
            </div>

            {/* Derechos reservados */}
            <div className="container mx-auto mt-8 text-center text-white">
            <p>TODOS LOS DERECHOS RESERVADOS ® 2024</p>
            </div>

            {/* Botón de WhatsApp */}
            <div className="fixed bottom-4 right-4">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <img src="/src/images/icons8-whatsapp-64.png" alt="WhatsApp" className="h-12" />
            </a>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
