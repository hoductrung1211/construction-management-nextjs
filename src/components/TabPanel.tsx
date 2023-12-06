export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
  }
  
export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, className, ...other } = props;

  return (
    <>
      {value === index && (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          className={className}
          {...other}
        >
          {children}
        </div>
      )}
    </>
  );
}