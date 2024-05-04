# analytics-api

NodeJS Express server side REST API application. The service exposes following two API

## POST /api/verify

The verification API (`POST /api/verify`) is responsible for checking the provided digital arts (NFT), against already trained and renowned digital arts collection to verify how unique the digital art is.

### prerequisite

- Azure Computer Vision API is trained already with most of the renowned digital arts collection (cross-chain) and indexed. [here](https://eastus.dev.cognitive.microsoft.com/docs/services/Cognitive_Services_Unified_Vision_API_2024-02-01/operations/61d65934cd35050c20f73ab6)
- The digital art image is stored on IPFS

### request payload

```json
{
    "ipfsHash": "0x.....asd",
    "ipfsUrl: "ipfs://0x.....wer"
}
```

### response payload

```json
{
    "ipfsHash": "0x.....asd",
    "ipfsUrl: "ipfs://0x.....wer",
    "uniqueness": 90,
    "metadata": {<some metadata for the reason for the uniqueness score>} 
}
```

## POST /api/identify

The identification API (`POST /api/identify`) is responsible for identifying the theme and other information about the provided digital art (NFT) image.

### prerequisite

- Azure Computer Vision API will be used to identify characteristics and the theme of the image.[here](https://eastus.dev.cognitive.microsoft.com/docs/services/Cognitive_Services_Unified_Vision_API_2024-02-01/operations/61d65934cd35050c20f73ab6)
- The digital art image is stored on IPFS

### request payload

```json
{
    "ipfsHash": "0x.....asd",
    "ipfsUrl: "ipfs://0x.....wer"
}
```

### response payload

```json
{
    "ipfsHash": "0x.....asd",
    "ipfsUrl: "ipfs://0x.....wer",
    "metadata": {<metadata about the image characterization>} 
}
```

## technology

- NodeJs
- Typescript
- Express
- Azure AI Vision
- dotenv

## how to run

### development
> npm run dev

### production
> npm run

## configuration

> PORT=7000