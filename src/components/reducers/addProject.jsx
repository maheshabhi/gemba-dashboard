import initialData from '../initialData';

const addProject = (state = initialData, action) => {

    switch(action.type) {

        case 'ADD_PROJECT':
            return state.concat([action.data]);

        case 'DELETE_POST': 
            return state.filter((project) => project.id !== action.id);

        case 'EDIT_PROJECT':
            return state.map((project) => {
                if(project.id == action.id) {
                    return {...project, editing: true}
                } else {
                    return project
                }
            });
        
        case 'UPDATE': 
            return state.map(project => {
                if(project.id == action.id) {
                    return {
                        ...project,
                        projectName: action.data.newTitle
                    }
                } else return project;
            })

        default:
            return state;
    }
}

export default addProject;