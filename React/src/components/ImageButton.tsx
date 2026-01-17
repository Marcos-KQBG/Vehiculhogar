import UserImage from "./UserImage";

interface ImageButtonData{
    src: string;
    alt: string;
}

function ImageButton({src, alt}: ImageButtonData) {
    return <button className="hover:text-[#3A3A3A]"> <UserImage src ={src} alt ={alt} /> </button>
}
export default ImageButton;