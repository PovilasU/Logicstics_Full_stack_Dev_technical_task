const items  = [ {id: 1, name: 'item 1'}, {id: 2, name: 'item 2'}];

export const getItems = ()=> Promise.resolve(items);

export const addItem =(name)=>{
    const newItem =(name)=>{
        const newItem = { id:items.length + 1, name};
        items.push(newItem);
        return Promise.resolve(newItem);
    }
}