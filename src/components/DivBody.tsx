import InputText from './InputText';
import RegisterInput from './RegisterInput';
import foto from '../assets/ChatGPT Image 16 nov 2025, 14_58_47.png'
import UserImage from './UserImage';
import RegisterButton from './RegisterButton';
import UseRegisterForm from '../hooks/UseRegisterForm';

function DivBody() {

    const {  handleInput, handleRegister } = UseRegisterForm();

    return (
        <>
            <div className='flex flex-col md:flex-row gap-10 justify-around'>


                <div className='flex items-center order-2 md:order-1 flex-col'>
                    <div className="hidden md:block size-95 ml-15 mt-10">
                        <UserImage src={foto} alt="App logo" />
                    </div>
                    <div className="md:ml-18 mt-10">
                        <RegisterButton onClick={handleRegister} text = "REGISTRARSE" />
                    </div>
                </div>


                <div className='order-1 md:mt-10 md:order-2'>

                    <div className="flex flex-col p-3 gap-2">
                        <InputText text="Nombre de usuario" />
                        <RegisterInput
                            onChange={(v) => handleInput("username", v)}
                            placeholder="Nombre de usuario"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <InputText text="Contraseña" />
                        <RegisterInput
                            onChange={(v) => handleInput("password", v)}
                            placeholder="Contraseña"
                            type="password"
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <InputText text="Teléfono" />
                        <RegisterInput
                            onChange={(v) => handleInput("telephone", v)}
                            placeholder="Teléfono"
                            type="tel"
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <InputText text="Correo electrónico" />
                        <RegisterInput
                            onChange={(v) => handleInput("email", v)}
                            placeholder="Correo electrónico"
                            type="email"
                        />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <InputText text="Dni" />
                        <RegisterInput
                            onChange={(v) => handleInput("dni", v)}
                            placeholder="Dni"
                            type="text"
                        />
                    </div>

                </div>

            </div>
        </>
    );
}

export default DivBody;