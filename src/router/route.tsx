import { RouteProps } from 'react-router-dom';

import {
  Dashboard,
  MainPage,
  TaskPage,
  WorkflowPage,
  CollectionPage,
  StoragePage,
  ProjectPage,
  StorePage,
  DocsPage,
} from 'pages';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  WELCOME = 'Welcome',
  DASHBOARD = 'Dashboard',
  TASK = 'Task',
  WORKFLOW = 'Workflow',
  COLLECTION = 'Collection',
  STORAGE = 'Storage',
  PROJECT = 'Project',
  STORE = 'Store',
  DOCS = 'Docs',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.WELCOME]: '/Welcome',
  [AppRoutes.DASHBOARD]: '/Dashboard',
  [AppRoutes.TASK]: '/Task',
  [AppRoutes.WORKFLOW]: '/Workflow',
  [AppRoutes.COLLECTION]: '/Collection',
  [AppRoutes.STORAGE]: '/Storage',
  [AppRoutes.PROJECT]: '/Project',
  [AppRoutes.STORE]: '/Store',
  [AppRoutes.DOCS]: '/Docs',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.WELCOME]: {
    path: RoutePath.Welcome,
    element: <MainPage />,
  },
  [AppRoutes.DASHBOARD]: {
    path: RoutePath.Dashboard,
    element: <Dashboard />,
  },
  [AppRoutes.TASK]: {
    path: RoutePath.Task,
    element: <TaskPage />,
  },
  [AppRoutes.WORKFLOW]: {
    path: RoutePath.Workflow,
    element: <WorkflowPage />,
  },
  [AppRoutes.COLLECTION]: {
    path: RoutePath.Collection,
    element: <CollectionPage />,
  },
  [AppRoutes.STORAGE]: {
    path: RoutePath.Storage,
    element: <StoragePage />,
  },
  [AppRoutes.PROJECT]: {
    path: RoutePath.Project,
    element: <ProjectPage />,
  },
  [AppRoutes.STORE]: {
    path: RoutePath.Store,
    element: <StorePage />,
  },
  [AppRoutes.DOCS]: {
    path: RoutePath.Docs,
    element: <DocsPage />,
  },
};
