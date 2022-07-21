import "./App.css";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./components/Theme";
import Footer from "./components/ui/Footer";
import HomeBanner from "./components/pages/HomeBanner";
import BusinessCard from "./components/pages/BusinessCard";

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <BrowserRouter>
        <Header />
        <HomeBanner />
        <BusinessCard />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}>Home</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route
            exact
            path="/purchase-card"
            component={() => <div>Purchase Card</div>}
          />
          <Route exact path="/company" component={() => <div>Company</div>} />
          <Route
            exact
            path="/individual"
            component={() => <div>Individual</div>}
          />
          <Route exact path="/pet" component={() => <div>Pet</div>} />
          <Route exact path="/kid" component={() => <div>Kid</div>} />
          <Route exact path="/custom" component={() => <div>Custom</div>} />
          <Route
            exact
            path="/contect-us"
            component={() => <div>Contect Us</div>}
          />
          <Route exact path="/cart" component={() => <div>Cart Item</div>} />
          <Route exact path="/login" component={() => <div>Login</div>} />
          <Route
            exact
            path="/get-your-card"
            component={() => <div>Get your Card</div>}
          />
        </Switch>
        <Footer />
        <h1>Figma Smart Card</h1>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
