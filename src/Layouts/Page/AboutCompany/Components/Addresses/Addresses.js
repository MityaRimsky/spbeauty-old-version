import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='justify-content-between d-inline-flex flex-column p-4 col border rounded-2'>
            <div className='title d-inline-flex flex-column gap-5'>Адреса заведений
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>   
                <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;