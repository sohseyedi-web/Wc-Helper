import { TiInfoLarge } from "react-icons/ti";


const AlertNotice = () => {

    const handleShowAlert = () => {
        alert('لطفا یادت نره از فیلترشکن استفاده کنی');
    }

    return (
        <div onClick={handleShowAlert} className='w-9 h-9 cursor-pointer z-30 fixed left-2 bottom-2 flex items-center justify-center bg-gray-700 text-white rounded-full'>
            <TiInfoLarge size={28} />
        </div>
    )
}

export default AlertNotice