import { createContext, useState } from "react";

const WorkSpacePReferenceContext = createContext();
export const WorkSpacePreferenceContextProvider = ({ children }) => {
  const [openPreferenceModel, setOpenPreferenceModel] = useState(false);
  return (
    <WorkSpacePReferenceContext.Provider
      value={{ openPreferenceModel, setOpenPreferenceModel }}
    >
      {children}
    </WorkSpacePReferenceContext.Provider>
  );
};
export default WorkSpacePReferenceContext;
