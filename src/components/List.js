import React from 'react';
import '../css/list.css';
import Edit from './Edit';
import Delete from './Delete';



export default function List(props) {

    const listado = props.list;
    const setList = props.setList;
    //props.setList(listado);

    

    return (
        <>
            <div className='listado'>
                {listado.map(item => (
                    <section key={item.id}>
                        {item.published ? (<span className='publicado'></span>) : (<span className='no_publicado'></span>)}
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <div className='botones'>
                            <Edit item={item} setList={setList}/>
                            <Delete item={item} setList={setList}/>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
