import { Button, Card, CardContent, Typography } from "@mui/material";
import { summarizeDoc } from "../api";

export default function Summarizer({ setSummary }) {
  const handleSummarize = async () => {
  const res = await summarizeDoc();
    setSummary(res.data.summary);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Summarize Document
        </Typography>
        <Button variant="contained" onClick={handleSummarize}>
          Summarize
        </Button>
      </CardContent>
    </Card>
  );
}
