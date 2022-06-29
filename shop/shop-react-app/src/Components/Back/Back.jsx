import { useEffect } from 'react';
import { useState } from 'react';
import BackContext from './BackContext';
import CatsCrud from './Cats/Crud';
import Nav from './Nav';
import ProductsCrud from './Products/Crud';
import axios from 'axios';

function Back({ show }) {

    const [lastUpdate, setLastUpdate] = useState(Date.now())

    const [createCat, setCreateCat] = useState(null);

    //Create
    useEffect(() => {
        if (null === createCat) return;
        axios.post('http://localhost:3000/admin/cats', createCat)
        .then(res => {
            showMessage(res.data.msg)
            setLastUpdate(Date.now());
        })
        .catch(error => {
            showMessage({ text: error.message, type: 'danger' });
        })
    }, [createCat]);

    const showMessage = () => {

    }

    return (
        <BackContext.Provider value={{
            setCreateCat
        }}>
            {
                show === 'admin' ?
                    <>
                        <Nav />
                        <h1>BACK</h1>
                    </>
                    : show === 'cats' ? <CatsCrud /> :
                        show === 'products' ? <ProductsCrud /> : null
            }
        </BackContext.Provider>
    )
}
export default Back;