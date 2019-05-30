import initialData from '../initialData';

const addProject = (state = initialData, action) => {

    switch(action.type) {

        case 'ADD_PROJECT':
            return state.concat([action.data]);

        case 'DELETE_POST': 
            return state.filter((project) => project.id !== action.id);

        case 'EDIT_PROJECT':
            let trtt = state.map((project) => {
                
                debugger;
                if(project.id == action.id) {
                    return {...project, editing: true}
                } else {
                    return project
                }
            });
            console.log("edit", trtt);
            
            return trtt;

        default:
            return state;
    }
}

export default addProject;