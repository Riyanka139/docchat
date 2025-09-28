import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import AskQuestion from "./components/AskQuestion";
import FileUpload from "./components/FileUpload";
import ResultCard from "./components/ResultCard";
import Summarizer from "./components/Summarizer";

function App() {
  const [answer, setAnswer] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom align="center">
        📄 AI Document Assistant
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Upload */}
        <Grid item xs={12}>
          <FileUpload />
        </Grid>

        {/* Ask Question */}
        <Grid item xs={12}>
          <AskQuestion setAnswer={setAnswer} />
        </Grid>

        {/* Summarizer */}
        <Grid item xs={12}>
          <Summarizer setSummary={setSummary} />
        </Grid>

        {/* Results */}
        {answer && (
          <Grid item xs={12}>
            <ResultCard
              title="Answer"
              content={answer}
              onClose={() => setAnswer("")}
            />
          </Grid>
        )}
        {summary && (
          <Grid item xs={12}>
            <ResultCard
              title="Summary"
              content={summary}
              onClose={() => setSummary("")}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;
