import { PROJECT_REDUCER } from "../shared/actionConstants"

export const setProjects = data => {
    return {
        type: PROJECT_REDUCER.SET_PROJECTS,
        value: data
    }
}

export const getProjects = () => {
    return {
        type: PROJECT_REDUCER.GET_PROJECTS,
    }
}