# Google Cloud Function Mailer

## Configuration

- use `.env.example` for SMTP configuration
- use cloubuild.example.yaml as a template for your own Google Cloud build configuration

## Usage

### payload

```json
{
  "from": {
    "name": "Sender Name",
    "email": "destination@email.com"
  },
  "to": ["multiple@email.com", "more@email.com", "another@email.com"],
  "subject": "",
  "text": "text message",
  "html": "base64 encoded HTML"
}
```
