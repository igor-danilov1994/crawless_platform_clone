import './App.scss';
import { useCallback, useState } from 'react';

import { ReactComponent as WelcomeIcon } from 'assets/welcomeIcon.svg';
import { ReactComponent as DashboardsIcon } from 'assets/dashboards.svg';
import { ReactComponent as StoreIcon } from 'assets/store.svg';
import { ReactComponent as TaskQueueIcon } from 'assets/taskQueue.svg';
import { ReactComponent as WorkflowIcon } from 'assets/workflow.svg';
import { ReactComponent as CollectionIcon } from 'assets/collection.svg';
import { ReactComponent as StorageIcon } from 'assets/mongo.svg';
import { ReactComponent as ProjectIcon } from 'assets/project.svg';
import { ReactComponent as DocsIcon } from 'assets/bookmark.svg';

import { HomePanel, TabList, TabPanel } from './components';
import { AppRouter } from './router';
import { ITab } from './types';
import { AppRoutes } from './router/route';

const tabsList: ITab[] = [
  {
    title: AppRoutes.WELCOME,
    icon: <WelcomeIcon />,
  },
  {
    title: AppRoutes.DASHBOARD,
    icon: <DashboardsIcon />,
  },
  {
    title: AppRoutes.TASK,
    icon: <TaskQueueIcon />,
  },
  {
    title: AppRoutes.WORKFLOW,
    icon: <WorkflowIcon />,
  },
  {
    title: AppRoutes.COLLECTION,
    icon: <CollectionIcon />,
  },
  {
    title: AppRoutes.STORAGE,
    icon: <StorageIcon />,
  },
  {
    title: AppRoutes.PROJECT,
    icon: <ProjectIcon />,
  },
  {
    title: AppRoutes.STORE,
    icon: <StoreIcon />,
  },
  {
    title: AppRoutes.DOCS,
    icon: <DocsIcon />,
  },
];

function App() {
  const [activeTabs, setActiveTabs] = useState<ITab[]>([]);

  const onCloseTab = (value: string) => {
    setActiveTabs((prev) => prev.filter((item) => item.title !== value));
  };

  const onOpenTab = useCallback(
    (tab: ITab) => {
      if (!activeTabs.includes(tab)) {
        setActiveTabs((prev) => [...prev, tab]);
      }
    },
    [activeTabs],
  );

  return (
    <div className="app-wrapper">
      <div className="panels">
        <TabPanel />
        <HomePanel tabs={tabsList} onOpenTab={onOpenTab} />
      </div>
      <div className="container">
        <TabList activeTabList={activeTabs} onCloseTab={onCloseTab} />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
