import defaultResourceData from '../data/resourceData.json';

export const RESOURCE_STORAGE_KEY = 'mk_resources';

export const getResources = () => {
    try {
        const stored = localStorage.getItem(RESOURCE_STORAGE_KEY);
        return stored ? JSON.parse(stored) : defaultResourceData;
    } catch {
        return defaultResourceData;
    }
};

export const saveResources = (resources) => {
    localStorage.setItem(RESOURCE_STORAGE_KEY, JSON.stringify(resources));
};
