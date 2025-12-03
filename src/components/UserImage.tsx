interface ImageData{
    src: string;
    alt: string;
}

function UserImage({src, alt}: ImageData) {
    return <img   src={src} alt={alt}/>;
}
export default UserImage;