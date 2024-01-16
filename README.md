# Metrics API

This project provides a simple Express.js API for processing metrics data.

## Getting Started

### Prerequisites

- Node.js installed

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Chend444/data-manipulation-ig.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd data-manipulation-ig
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Server

```bash
node app.js
```

### Endpoints

#### 1. Get Grouped Metrics

- **Method:** GET
- **URL:** `/metrics/group`

- **Description:**
  This endpoint retrieves metrics data from the server, processes it, and returns the metrics in a grouped format. The server reads the data from a specified file, performs necessary calculations, and structures the information to provide a clear overview of the metrics.
- **Request Body:**
```json
{
  "metrics": [
    {
      "name": "metric1",
      "filters": [
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 4,
            "variant": 0,
            "selectedOptions": ["End Customer"]
          }
        },
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 5,
            "variant": 2,
            "selectedOptions": ["true"]
          }
        }
      ]
    },
    {
      "name": "metric2",
      "filters": [
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 4,
            "variant": 0,
            "selectedOptions": ["End Customer"]
          }
        },
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 5,
            "variant": 2,
            "selectedOptions": ["true"]
          }
        }
      ]
    },
    {
      "name": "metric3",
      "filters": [
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 4,
            "variant": 0,
            "selectedOptions": ["End Customer"]
          }
        },
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 5,
            "variant": 2,
            "selectedOptions": ["true"]
          }
        }
      ]
    },
    {
      "name": "metric4",
      "filters": [
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 2,
            "variant": 2,
            "selectedOptions": ["Channel Led"]
          }
        },
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 3,
            "variant": 0,
            "selectedOptions": ["New Customer", "Upsell"]
          }
        }
      ]
    },
    {
      "name": "metric5",
      "filters": [
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 2,
            "variant": 2,
            "selectedOptions": ["Channel Led"]
          }
        },
        {
          "kind": "custom",
          "data": {
            "fieldIndex": 3,
            "variant": 0,
            "selectedOptions": ["New Customer", "Upsell"]
          }
        }
      ]
    }
  ]
}
```
- **Returned Data:**
```json
[
    {
        "metrics": [
            "metric1",
            "metric2",
            "metric3"
        ],
        "filters": [
            {
                "kind": "custom",
                "data": {
                    "fieldIndex": 4,
                    "variant": 0,
                    "selectedOptions": [
                        "End Customer"
                    ]
                }
            },
            {
                "kind": "custom",
                "data": {
                    "fieldIndex": 5,
                    "variant": 2,
                    "selectedOptions": [
                        "true"
                    ]
                }
            }
        ]
    },
    {
        "metrics": [
            "metric4",
            "metric5"
        ],
        "filters": [
            {
                "kind": "custom",
                "data": {
                    "fieldIndex": 2,
                    "variant": 2,
                    "selectedOptions": [
                        "Channel Led"
                    ]
                }
            },
            {
                "kind": "custom",
                "data": {
                    "fieldIndex": 3,
                    "variant": 0,
                    "selectedOptions": [
                        "New Customer",
                        "Upsell"
                    ]
                }
            }
        ]
    }
]
```
#### 2. Identity Merge

- **Method:** GET
- **URL:** `/identity/merge`

- **Description:**
  This endpoint facilitates the merging of identity data based on common entities. Clients can send an array of identity details, including account names, account IDs, deal IDs, emails, and contact IDs. The server processes this data, identifying common entities, and returns a consolidated dataset. This functionality is particularly useful for viewing a comprehensive buyer journey, merging related information such as account details, deals, and contacts.
- **Request Body:**
```json
{
   "identities": [
      {
         "account_name": "bijihadina",
         "account_id": 233,
         "deal_id": null,
         "email": "guy@infinigrow.com",
         "contact_id": 1
      },
      {
         "account_name": "infinigrow",
         "account_id": 243,
         "deal_id": 23,
         "email": "dor@infinigrow.com",
         "contact_id": 2
      },
      {
         "account_name": null,
         "account_id": null,
         "deal_id": 23,
         "email": "lee@gmail.com",
         "contact_id": null
      }
   ]
}
```
- **Returned Data:**
```json
[
   {
      "account_name": [
         "bijihadina",
         "infinigrow"
      ],
      "account_id": [
         233,
         243
      ],
      "email": [
         "guy@infinigrow.com",
         "dor@infinigrow.com",
         "lee@gmail.com"
      ],
      "contact_id": [
         1,
         2
      ],
      "deal_id": [
         23
      ]
   }
]
```