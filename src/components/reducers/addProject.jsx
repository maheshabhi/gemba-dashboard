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
                        projectName: action.data.projectName,
                        projectDesc: action.data.projectDesc,
                        lifeCycle: action.data.lifeCycle,
                        startDate: action.data.startDate,
                        endDate: action.data.endDate,
                        stage: action.data.stage,
                        escalation: action.data.escalation,
                        activities: action.data.activities,
                        activityCategory: action.data.activityCategory,
                    }
                } else return project;
            })

        default:
            return state;
    }
}

export default addProject;