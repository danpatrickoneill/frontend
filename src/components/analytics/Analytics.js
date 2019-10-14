import ReactGA from "react-ga"

export const initGA = () => {
    ReactGA.initialize("UA-145774968-1")
}

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}

//This file sets up google analytics. It is imported to app to track each page visit. If you want to see specific page visits, you can import logPageView on the given component. However, I would recommend using mixpanel for that.