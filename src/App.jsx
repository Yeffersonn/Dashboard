import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Dashboard } from "./scenes/dashboard/index";
import { TopBar } from "./scenes/global/TopBar";
import { Sidebar } from "./scenes/global/Sidebar";
import { useState } from "react";
import { Team } from "./scenes/team/index";
import {Contacts} from "./scenes/contacts";
import {Invoices} from "./scenes/invoices";
import {Form} from "./scenes/form";
// import {Calendar} from "./scenes/calendar"; ERROR IMPORTS!!!
import {FAQ} from "./scenes/faq";
/* import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography"; */

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                  <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <TopBar setIsSidebar={setIsSidebar}/>

                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} /> 
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            {/* <Route path="/calendar" element={<Calendar />} /> */}
                            <Route path="/faq" element={<FAQ />} />
                            {/* <Route path="/bar" element={<Bar />} /> */}
                            {/* <Route path="/pie" element={<Pie />} /> */}
                            {/* <Route path="/line" element={<Line />} /> */}
                            {/* <Route path="/geography" element={<Geography />} />  */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
