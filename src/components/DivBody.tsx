import FormLabel from './FormLabel';
import RegisterInput from './RegisterInput';
import foto from '../assets/ChatGPT Image 16 nov 2025, 14_58_47.png'
import UserImage from './UserImage';
import RegisterButton from './RegisterButton';
import useRegisterForm from '../hooks/UseRegisterForm';

function DivBody() {

    const {  handleInput, handleRegister } = useRegisterForm();
    

    return (
        <>
            <div className='flex flex-col md:flex-row gap-10 justify-around'>

                <form id="registerForm" onSubmit={handleRegister} className='order-1 md:mt-10 md:order-2'>

                    <div className="flex flex-col p-3 gap-2">
                        <FormLabel text="Nombre de usuario"  />             
                        <RegisterInput
                            onChange={(v) => handleInput("username", v)}
                            placeholder="Nombre de usuario"
                            type="text"
                            required={true}
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <FormLabel text="Contraseña" />
                        <RegisterInput
                            onChange={(v) => handleInput("password", v)}
                            placeholder="Contraseña"
                            type="password"
                            required={true}
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <FormLabel text="Teléfono" />
                        <RegisterInput
                            onChange={(v) => handleInput("telephone", v)}
                            placeholder="Teléfono"
                            type="tel"
                            required={true}
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <FormLabel text="Correo electrónico" />
                        <RegisterInput
                            onChange={(v) => handleInput("email", v)}
                            placeholder="Correo electrónico"
                            type="email"
                            required={true}
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <FormLabel text="Dni" />
                        <RegisterInput
                            onChange={(v) => handleInput("dni", v)}
                            placeholder="Dni"
                            type="text"
                            required={true}
                        />
                    </div>

                </form>


                <div className='flex items-center order-2 md:order-1 flex-col'>
                    <div className="hidden md:block size-95 ml-15 mt-10">
                        <UserImage src={foto} alt="App logo" />
                    </div>
                    <div className="md:ml-18 mt-10">
                        <RegisterButton type="submit" text = "REGISTRARSE" form="registerForm" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default DivBody;