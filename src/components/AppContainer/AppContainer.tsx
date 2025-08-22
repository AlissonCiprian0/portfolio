const SpacedContainer = ({ children }: { children: React.ReactNode }) => (
  <div className='px-15 xl:px-[25vw]'>
    <>{children}</>
  </div>
);

const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <div className='pt-40'>
    <>{children}</>
  </div>
);

AppContainer.Spaced = SpacedContainer;

export default AppContainer;
