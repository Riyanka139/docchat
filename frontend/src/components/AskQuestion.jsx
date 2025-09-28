import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { askQuestion } from "../api";

export default function AskQuestion({ setAnswer }) {
  const [question, setQuestion] = useState("");

  const handleAsk = async () => {
    const res = await askQuestion(question);
    setAnswer(res.data.answer);
    setQuestion('')
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Ask a Question
        </Typography>
        <TextField
          label="Enter your question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleAsk}>
          Ask
        </Button>
      </CardContent>
    </Card>
  );
}
