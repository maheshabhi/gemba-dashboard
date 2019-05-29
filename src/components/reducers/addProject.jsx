import initialData from '../initialData';

const addProject = (state = initialData, action) => {

    switch(action.type) {

        case 'ADD_PROJECT':
            return state.concat([action.data]);

            
        default:
            return state;
    }
}

export default addProject;