import SearchInput from './SearchInput'
import PrincipalButton from './PrincipalButton'
function DivFooter() {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col w-fit gap-5 ">
                <SearchInput placeholder="(Matricula)" type="text" />
                <PrincipalButton text="BUSCAR" />

            </div>


        </div>
    );
}
export default DivFooter;