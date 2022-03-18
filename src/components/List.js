import React from 'react';
import '../css/list.css';
import Edit from './Edit';
import Delete from './Delete';


export default function List(props) {

    const listado = props.list;
    //props.setList(listado);

    return (
        <>
            <div className='listado'>
                {listado.map(item => (
                    <section key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <div className='botones'>
                            <Edit item={item}/>
                            <Delete item={item}/>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
