import MenuButton from "./MenuButton";
import UpperSelector from "./UpperSelector";
import UserImage from "./UserImage";
import ImageButton from "./ImageButton";
import fotoflecha from "../assets/icono_flecha.png"
import MenuText from "./MenuText";
import menuHamburguesa from "../assets/Hamburguesa.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function DivUpperMenuRegister() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const userImg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhQSBxQPFhUVFxgWFhYXExcbFRUWIBUXGBcXGxcaHSggGRspJxUWITEiJyktLy46GyAzODgsNygtLisBCgoKDg0NFQ4QFSsZFRkrLSsrLTctKysrNystLSs3LSsrKzcrLS0rLS0rKystLS03LTc3KysrKzcrNysrKystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABgcIAQQFAwL/xABEEAACAQEEBgUHCQUJAAAAAAAAAQIDBAUGEQcSITFBcSJRYYGRExQyQnKSoRUjM1JTYrHBwjZEo7LSFzVDc4Kis9Hh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCegANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeVf+I7Lh+hrXpUjFv0YLbOXKK29+4jWkTHscPR8hdmrK0NbXvjRT3NrjJ8I974J0jbLXUt1qlUtkpTnJ5ylJ5tsJqz710xNtq6LOkuEqss37kd3vMjtp0o3lW+jqUoezSg+7pqRCwDUys+k686L6dWnP2qNP9KR712aYasJJXrZ6clxlTk4tL2ZZp+KKvATWksOYvsmI1ld9TKeWbpT6NRdez1uabPdMpU6jpVFKk2pJppp5NNbmmtzLi0c6RHeNSNlv5ryj2U6r2Ko+EJ9U+p8d2/eXVlgAKAAAAAAAAAAAAAAAAAAAAAAAAHh40xBHDVwzrPJz9GlF+tUeeXcsm3yPcKP0x3y7diNWem+hZ45NddSSUpPw1V3MFQW1WidrtMqlpk5Tm3KUnvbbzbPkAGQAAAAAOYycZZx2NHAA0Do0xR/aO48rU869HKFTrkvVqd+TT7U+slxnnRtfXyLiyk5PKFV+Sn1ZS2RfdLVfiaGDUAAAAAAAAAAAAAAAAAAAAAAAAcVKipU3Ke5Jt8ks2ZbvO2SvG8qlarvqTlN98m8viaNxnaPNcJ2qUdjVGaXNx1V+JmgJQABAAAAAAAAHMXqvOJp+4Ld8p3HQrPfUpQk/acVrLxzMvmgdFFo8vgejreo6kPCpJr4NBYlwACgAAAAAAAAAAAAAAAAAAAACK6Up6mA7Tlx8mv41Mz0aD0rR1sB2jLg6T/jQX5mfAlAAEAAAAAAAAC79CVTWwpUT4Wifxp0v/SkC7NCEcsMVX12iXwpU/wDsLFhgAKAAAAAAAAAAAAAAAAAAAAAPFxtY/PsI2qEVm3Sk0utx6a+MUZqNXtayyltXFGaMW3M7gxDVoST1Yyzg9u2m9sHnx2bOaYSvHAAQAAAAAAAAL/0TWPzTBNJyWTqSnUfbnLVT8IIoq7LDO87wp0bKs51JKK73vfYt75Gnbuscbuu+nRoejThGC5JJZ/ALHYAAUAAAAAAAAAAAAAAAAAAAAACI6RMHLE9gUrLqq0U10G9inHe6bfxT4PmyXADK1ssk7DapU7ZGUJxeUoyWTT5HxNM4gwzZcQ0kr0pqTW6a2VI8pLh2PNFd3rodkm3dFoTXCNWOT9+OefuoJiqgTO1aL7yofR06dT2KsP1NHTej681+61Pep/1BEYBJ1o+vN/utT3of1HZs2jO8676VGMO2VWn+ltgQ8/VOm6tRRpJttpJJZtt7kkt7LNuvQ9Vm071tFOC4xpxc21zlqpeDLBw3g2x4d22CnnUyydWb1qnc90e5ILiO6McDu44ec3qvn5LKEPsovfn99/BbOLLBACgAAAAAAAAAAAAAAAAAAAAAAAAByBwDk6V5XrQuqGd5VaVP25pN8lvfcB3AQu3aUbusufkp1arX2dN/jPVR5dTTDZV9HQtL5uC/Ng1ZAK3hpisz9Oz2lcpQf5o9CxaVbutH0zr0vbp5r/Y5A1OAefdl+2W9v7tr0aj+rGa1vde34HoAAcnAAAAAAAAAAAAAAAAAAAAAAAADeSzYAj+KcZWXDUcrZLWqcKUMnPm9uUV2vuzIVjvSbqOVDDMl1TrrJ81Tz2f6vDrKnqVHVqOVVttvNtvNtve23vYTU0xDpMtt7NxsjVnpvhTfTy7aj2+GRDKtR1ajlVbbe1tvNt9re8/ACAAAAADlPJ7CWYf0h265Wk6nlqf1KuctnZP0l45dhEgBoPCmP7LiJqDfkaz/AMObXSf3J7pctj7CWGUCycDaTJ3e1RxC5VKW6NXLOpT9rjOPxXbuC6uYH4oVo2ijGdnlGUZJOMotOMk9zTW9H7CgAAAAAAAAAAAAAAAAByAKa0nY8duqSsdzS+aXRq1E/pXxgn9RcX63LfItLOLXdNi80u+TVaqs5yW+nTezLslLauxZ9aKSCWgACAAAAAAAAAAAAACb6O8cSw7aFRt7crNN7eLot+vH7vXHvW3fe1Oaq01Kk000mmnmmntTT6jKRa2iDFr1lYLwk3nm6Enw4uly3td66gsq2QcnAUAAAAAAAAAAAAADp3zeULnuqpXtXo04uT62+EV2t5JczuFV6br61aVGx0Xv+eqctsYL+Z9yAq+9rxne15VK9rec6knJ9nUl2JZJcjqABkAAAAAAAAAAAAAAAAPpQrSs9aM6LalFqUWt6aeaaPmANK4Nv1Yjw9Tr7Nf0aiXCotktnBPZJdjR7RSuhe+vNL8nZar6NdZx6lUim/itbwRdQaAAAAAAAAAAAAAHJm7Hd5fKuLbRUT2a7hH2YdBZe7n3mhb4tfyfdNar9nTnPwi2vwMthKAAIAAAAAAAAAAAAAAAAAADt3TbpXZelKtSzzpzjPnk08u/caipVFWpKVPapJST7Gs0ZSNH6PrX57guyy6qah7jcP0oLEgAAUAAAAAAAAAAHi42/Y+1/wCRU/lZmoAJQABAAAAAAAAAAAAAAAAAAAC/9E37C0faq/8ALIALEwAAUAAAAAf/2Q=="
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigateTo = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="hidden md:flex justify-between border-[#FFFFFF] border-b ">
               <div className=" flex ml-5">
                    <MenuButton text="Vehiculhogar" />
                </div> 
                <div className="flex gap-15">
                    <UpperSelector text="Registros" />
                    <UpperSelector text="Mostrar" />
                    <MenuButton text="Página Principal" />
                </div>

                <div className="mr-5 mt-2 mb-2 size-10">
                    <UserImage  src ={userImg} alt="usuario desconocido"/>
                </div>
                

            </div>

            <div className=" flex justify-between border-[#FFFFFF] border-b  md:hidden">
                <div className=" size-18  ">
                    <ImageButton src={fotoflecha} alt="icono flecha" />
                </div>
                <div>
                    <MenuText text="REGISTRO" />
                </div>
                <div className=" size-20 cursor-pointer" onClick={toggleMenu}>
                    <ImageButton src={menuHamburguesa} alt="icono ayuda" />
                </div>
            
            </div>

            
            {isMenuOpen && (
                <div className="md:hidden fixed top-16 right-0 w-64 bg-white shadow-lg z-50 border-l border-gray-200">
                    <div className="flex flex-col p-4">
                        <button 
                            onClick={() => navigateTo('/')}
                            className="py-3 px-4 text-left hover:bg-gray-100 rounded transition-colors border-b"
                        >
                            Registro
                        </button>
                        <button 
                            onClick={() => navigateTo('/List')}
                            className="py-3 px-4 text-left hover:bg-gray-100 rounded transition-colors border-b"
                        >
                            Lista
                        </button>
                        <button 
                            onClick={() => navigateTo('/')}
                            className="py-3 px-4 text-left hover:bg-gray-100 rounded transition-colors border-b"
                        >
                            Página Principal
                        </button>
                    </div>
                </div>
            )}

            
            {isMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
}

export default DivUpperMenuRegister;