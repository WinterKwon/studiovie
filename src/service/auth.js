import {db} from './db';

export const registerWork = ({id, title,period,role, area }) =>{
    db.information.push({id, title,period,role, area });
}

export const getWork = (id) =>{
    return db.information.find((e)=> e.id === id);
}