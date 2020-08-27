import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme/Theme";

import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";
import LandingPage from "./pages/Landing/Landing";
import ServicesPage from "./pages/Services/Services";
import CustomSoftware from "./pages/Services/CustomSoftware/CustomSoftware";
import AppDevelopment from "./pages/Services/AppDevelopment/AppDevelopment";
import WebsiteDevelopment from "./pages/Services/WebsiteDevelopment/WebsiteDevelopment";
import Revolution from "./pages/Revolution/Revolution";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={tabValue}
          setValue={setTabValue}
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={setSelectedMenuIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <ServicesPage
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => (
              <AppDevelopment
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route
            exact
            path="/websites"
            render={(props) => (
              <WebsiteDevelopment
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => (
              <Revolution
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => (
              <AboutUs
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route exact path="/estimate" render={(props) => <h1>ESTIMATE</h1>} />
        </Switch>
        <Footer
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={setSelectedMenuIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
