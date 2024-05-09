# analytics-api

NodeJS Express server side REST API application. The service exposes following two API

## GET /api/identify/{ipfsHash}

This API will read the IPFS hash from the path param and will try ti identify the content of the image using Google Cloud Vision API. Once the image has been analyzed then the response from the Cloud Computer AI API will then be collated to identify the best label, uniqueness and tags.

### prerequisite

- [Google Cloud Vision API](https://cloud.google.com/vision/?hl=en_US&_gl=1*1o3nwgb*_ga*MTQyNDQ1MDcxOS4xNzE1MTM1NDk4*_ga_WH2QY8WWF5*MTcxNTEzNTQ5OC4xLjEuMTcxNTEzNjQ1MS4wLjAuMA..&_ga=2.202793233.-1424450719.1715135498) is trained already with most of the renowned digital arts collection (cross-chain) and indexed.
- The digital art image is stored on IPFS

## POST /api/verify

The verification API (`POST /api/verify`) is responsible for checking the provided digital arts (NFT), against already trained and renowned digital arts collection to verify how unique the digital art is.

### prerequisite

- Google Cloud Computer Vision API is trained already with most of the renowned digital arts collection (cross-chain) and indexed. [here](https://eastus.dev.cognitive.microsoft.com/docs/services/Cognitive_Services_Unified_Vision_API_2024-02-01/operations/61d65934cd35050c20f73ab6)
- The digital art image is stored on IPFS

### response payload

```json
{
    <TBD>
}
```

## technology

- NodeJs
- Typescript
- Express
- Google Cloud Vision AI
- dotenv

## how to run

### development
>
> npm run dev

### production
>
> npm run

## configuration

> PORT=7000
