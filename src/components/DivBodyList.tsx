import DropdawnMenu from "./DropdawnMenu";
import foto from '../assets/ChatGPT Image 16 nov 2025, 14_58_47.png'
import UserImage from "./UserImage";

function DivBodyList() {

    return (
        <>

            <div className="flex">

                <div className="h-96 overflow-y-auto mt-5 mb-5 rounded">
                    <div className="flex flex-wrap justify-around w-fit ml-5 mb-5 mt-5 md:grid grid-cols-2  ">

                        <DropdawnMenu />
                        <DropdawnMenu />
                        <DropdawnMenu />
                        <DropdawnMenu />
                        <DropdawnMenu />
                        <DropdawnMenu />
                        <DropdawnMenu />
                        <DropdawnMenu />
                    </div>

                </div>








                <div className="hidden md:block  w-70 h-40 ml-30 mt-20">
                    <UserImage src={foto} alt="App Logo" />
                </div>




            </div>



        </>
    );
}

export default DivBodyList; 