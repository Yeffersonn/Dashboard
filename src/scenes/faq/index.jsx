import { Box, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const colors = tokens(mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Página de preguntas frecuentes" />

            <Accordion
                defaultExpanded
                sx={{
                    backgroundColor:
                        mode === "dark"
                            ? colors.primary[500]
                            : colors.primary[400],
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                defaultExpanded
                sx={{
                    backgroundColor:
                        mode === "dark"
                            ? colors.primary[500]
                            : colors.primary[400],
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Otra pregunta importante
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                defaultExpanded
                sx={{
                    backgroundColor:
                        mode === "dark"
                            ? colors.primary[500]
                            : colors.primary[400],
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Tu pregunta favorita
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                defaultExpanded
                sx={{
                    backgroundColor:
                        mode === "dark"
                            ? colors.primary[500]
                            : colors.primary[400],
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Alguna pregunta al azar
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                defaultExpanded
                sx={{
                    backgroundColor:
                        mode === "dark"
                            ? colors.primary[500]
                            : colors.primary[400],
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        La última pregunta
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export { FAQ };
