/// <reference types="vite/client" />

interface IProject {
    img: string;
    category: Category;
}

interface IPortfolioState {
    filter: Filter
}

interface IProjects {
    projects: IProject[]
}

interface IToolbar {
    filters: Filter[];
    selected: Filter;
    onSelectFilter: (filter: Filter) => void;
}

type Category = string;

type Filter = string;
