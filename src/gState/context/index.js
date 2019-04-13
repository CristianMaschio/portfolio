import React from "react"

export default React.createContext({
  setRenderInformation: newLocale => {},
  headerClass: "",
  language: "En",
  changeLanguage: newLocale => {}
})
