import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='justify-content-between d-inline-flex flex-column gap-3 mt-1 col'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-5'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>    
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
    );
}

export default Addresses;