def summarize_text(text):
    """
    Simple mock summarizer for testing.
    """
    sentences = text.split(".")
    return ". ".join(sentences[:3]) + "..."