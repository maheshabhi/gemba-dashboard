const initialData =  [
    {   "id": 1,
        "projectName": "ESSSV",
        "projectDesc": "esssv hybid electric HT- 1009005",
        "lifeCycle": "Full",
        "startDate": "4/11/2018",
        "endDate": "1/1/2020",
        "stage": "1",
        "activities": [
                { id: 'task-1', content: 'Learn Angular', category: 'Carry over' },
                { id: 'task-2', content: 'Learn React', category: 'Carry over' },
                { id: 'task-3', content: 'Learn Vue', category: 'Next week' },
                { id: 'task-4', content: 'Learn Next', category: 'This week' }
        ],
        "goals": "Something",
        "escalation": "Management", 
        "activityCategory": ['Carryover', 'This week', 'Next week']
    },
    {
        "id": 2,
        "projectName": "OPSIS",
        "projectDesc": "Opsis scorpion HT- 1009093",
        "lifeCycle": "Moderate",
        "startDate": "4/06/2018",
        "endDate": "1/11/2019",
        "stage": "3",
        "activities": [
                { id: 'task-1', content: 'Learn Angular', category: 'This week' },
                { id: 'task-2', content: 'Learn React' , category: 'Carry over'},
                { id: 'task-3', content: 'Learn Vue' , category: 'Carry over'},
                { id: 'task-4', content: 'Learn Next' , category: 'Next week'}
        ],
        "goals": "All docs come by 28/2/2019",
        "escalation": "QD MPA",
        "editing": "false", 
        "activityCategory": ['Carryover', 'This week', 'Next week']
    },
    {
        "id": 3,
        "projectName": "OPSIS AWES",
        "projectDesc": "Opsis awes HT-10035555",
        "lifeCycle": "Core",
        "startDate": "8/03/2018",
        "endDate": "18/12/2019",
        "stage": "2",
        "activities": [
                { id: 'task-1', content: 'Learn Angular', category: 'Carry over' },
                { id: 'task-2', content: 'Learn React', category: 'Next week'},
                { id: 'task-3', content: 'Learn Vue', category: 'This week' },
                { id: 'task-4', content: 'Learn Next', category: 'Carry over' }
        ],
        "goals": "Something",
        "escalation": "",
        "editing": "false", 
        "activityCategory": ['Carryover', 'This week', 'Next week']
    }
];   

export default initialData;