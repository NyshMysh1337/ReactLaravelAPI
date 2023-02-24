import React, {useRef} from 'react';

const Mat = () => {

    // const [materials, setMaterials] = useState([]);

    // const handelMaterial = (e) => {
    //     setMaterials(e.target.files)
    // }

    const fileComponent = useRef();
    const handelUpload = async (e) => {
        e.preventDefault()
        console.log(fileComponent.current.files)

        // if(!materials) {
        //     alert('Выберете файл');
        //     return;
        // }

        // const formData = new FormData();
    }

    return (
        <div>
            <input ref={fileComponent} type="file" multiple/>
            <button onClick={handelUpload}>add</button>
        </div>
    );
};

export default Mat;