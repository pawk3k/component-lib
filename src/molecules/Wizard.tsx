import React, { createContext, FunctionComponent, ReactFragment, useEffect, useState } from 'react';

interface WizardProps {
  children: React.ReactNode[];
}

interface WizardProviderValues {
  activePage: number;
  goNextPage: () => void;
  goPrevPage: () => void;
  steps: number;
  setSteps: (steps: number) => void;
}

const WizardContext = createContext({} as WizardProviderValues);

const useWizardContext = () => {
  const context = React.useContext(WizardContext);
  if (!context) {
    throw new Error('Component can not be used outside of Wizard');
  }
  return context;
};

const WizardWrapper = ({ children }: WizardProps): JSX.Element => {
  const [activePage, setActivePage] = useState(0);
  const [steps, setSteps] = useState(0);

  const goNextPage = () => setActivePage((activePage) => activePage + 1);
  const goPrevPage = () => setActivePage((activePage) => activePage - 1);

  return (
    <WizardContext.Provider
      value={{
        activePage,
        goNextPage,
        goPrevPage,
        steps,
        setSteps,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

interface PagesPros {
  children: React.ReactNode[];
}

const Pages = (props: PagesPros): JSX.Element => {
  const { activePage, setSteps } = useWizardContext();

  const pages = React.Children.toArray(props.children);
  const stepsCount = React.Children.count(props.children);
  const currentPage = pages[activePage];

  useEffect(() => {
    setSteps(stepsCount);
  }, [stepsCount, setSteps]);

  return <div {...props}>{currentPage}</div>;
};

// useWizardProgress hook eventually
const WizardProgressBar = () => {
  const { activePage, steps } = useWizardContext();
  return (
    <div>
      {activePage + 1}/{steps}
    </div>
  );
};

const NextButton = () => {
  const { activePage, steps, goNextPage } = useWizardContext();

  if (activePage >= steps - 1) return null;

  return <button onClick={goNextPage}>Next</button>;
};

const PrevButton: FunctionComponent = () => {
  const { activePage, goPrevPage } = useWizardContext();

  if (activePage <= 0) return null;

  return <button onClick={goPrevPage}>Previous</button>;
};

export const Wizard = () => {
  return (
    <WizardWrapper>
      <Wizard.Pages>
        <div>page1</div>
        <div>page2</div>
        <div>page3</div>
        <div>page4</div>
      </Wizard.Pages>
      <Wizard.NextButton />
      <Wizard.PrevButton />
      <WizardProgressBar />
    </WizardWrapper>
  );
};

Wizard.Pages = Pages;
Wizard.NextButton = NextButton;
Wizard.PrevButton = PrevButton;
Wizard.Progress = WizardProgressBar;
