import type { Repo } from "../models/Repo"
import { interfaceRequiredPropNames } from "../models/Repo"

export function isValidRepo(obj: any): obj is Repo  {
    // checks to that all non-optional props from repo interface are present on the obj being passed 
    for (let requiredKey of interfaceRequiredPropNames) {
        if (obj[requiredKey] === undefined)
            return false           
    }

    return true
}

export function areValidRepos(objs: any[]): objs is Repo[] {
    for (let obj of objs)
        if (isValidRepo(obj) === false)
            return false
            
    return true
}