import InputText from './InputText';
import RegisterInput from './RegisterInput';
import foto from '../assets/ChatGPT Image 16 nov 2025, 14_58_47.png'
import UserImage from './UserImage';
import PrincipalButton from './PrincipalButton';

function DivBody() {

    return (
        <>
            <div className='flex gap-50 '>
                <div className='flex-col '>
                    <div className="size-95 ml-15 mt-10" >
                        <UserImage src={foto} alt="App logo" />
                    </div>
                    <div className="ml-43 mt-10" >
                        <PrincipalButton text="REGISTRARSE" />
                    </div>

                </div>
                <div className='mt-10'>
                    <div className="flex flex-col p-3  gap-2" >
                        <InputText text="Nombre de usuario" />
                        <RegisterInput placeholder='Nombre de usuario' type='text'/>
                    </div>
                    <div className="flex flex-col p-3 gap-2" >
                        <InputText text="Contraseña" />
                        <RegisterInput placeholder='Contraseña' type='password'/>
                    </div>
                    <div className="flex flex-col p-3 gap-2" >
                        <InputText text="Teléfono" />
                        <RegisterInput placeholder='Teléfono' type='tel'/>
                    </div>
                    <div className="flex flex-col p-3 gap-2" >
                        <InputText text="Correo electrónico" />
                        <RegisterInput placeholder='Correo electronico' type='email'/>
                    </div>
                    <div className="flex flex-col p-3 gap-2" >
                        <InputText text="Dni" />
                        <RegisterInput placeholder='Dni' type='text'/>
                    </div>

                </div>

            </div>
                

        </>
    );

}

export default DivBody;