import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { uploadFile } from "../api";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF first!");
      return;
    }

    await uploadFile(file)

    alert("✅ File uploaded successfully!");
    setFile(null);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Upload PDF
        </Typography>
        <Stack direction="column" spacing={2}>
          <Button variant="outlined" component="label">
            Choose File
            <input type="file" hidden accept="application/pdf" onChange={handleFileChange} />
          </Button>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </Stack>
        {file && <Typography variant="body2" sx={{ mt: 1 }}>📄 {file.name}</Typography>}
      </CardContent>
    </Card>
  );
}
